import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

const siteSource = globSync(["src/**/*.{ts,tsx}", "index.html"])
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
