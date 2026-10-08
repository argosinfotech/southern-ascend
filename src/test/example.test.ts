import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";

const sourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return [".ts", ".tsx"].includes(extname(path)) ? [path] : [];
  });

const siteSource = [...sourceFiles("src"), "index.html"]
  .map((path) => readFileSync(path, "utf8"))
  .join("\n");

describe("certification language", () => {
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
});
