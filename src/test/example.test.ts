import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";

const sourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (path === join("src", "test")) return [];
    if (entry.isDirectory()) return sourceFiles(path);
    return [".ts", ".tsx"].includes(extname(path)) ? [path] : [];
  });

const siteSource = [...sourceFiles("src"), "index.html"]
  .map((path) => readFileSync(path, "utf8"))
  .join("\n");

describe("certification language", () => {
  it("labels AS9100 as Approved, never Primary Certification", () => {
    expect(siteSource).toContain('{ title: "AS9100", subtitle: "Approved" }');
    expect(siteSource).not.toMatch(/Primary Certification/i);
  });

  it("does not reference CMMC Level 1", () => {
    expect(siteSource).not.toMatch(/CMMC(?:\s+Level)?\s*(?:1|L1)/i);
  });

  it("uses CMMC Level 2 Readiness without a timeline", () => {
    expect(siteSource).toContain("CMMC Level 2 Readiness");
    expect(siteSource).not.toMatch(/CMMC Level 2[^\n]*(?:target|timeline|Q[1-4]|20\d{2})/i);
  });

  it("does not reference FAR or DFARS", () => {
    expect(siteSource).not.toMatch(/\b(?:FAR|DFARS)\b/);
  });

  it("uses the correct public contact details", () => {
    expect(siteSource).not.toMatch(/sales@gouldsouthern\.com/i);
    expect(siteSource).not.toMatch(/\bfax\b|770[). -]+921[. -]+9477/i);
    expect(siteSource).toContain("info@gouldsouthern.com");
  });

  it("keeps the local number only on the Contact page", () => {
    const sourcesOutsideContact = sourceFiles("src")
      .filter((path) => path !== join("src", "pages", "Contact.tsx"))
      .map((path) => readFileSync(path, "utf8"))
      .join("\n");

    expect(sourcesOutsideContact).not.toMatch(/770[). -]+476[. -]+1860/);
    expect(readFileSync(join("src", "pages", "Contact.tsx"), "utf8")).toContain("(770) 476-1860");
  });
});
