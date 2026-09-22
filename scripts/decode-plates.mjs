import { mkdirSync, readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src/plates-b64");
const destDir = join(root, "public/plates");

if (!existsSync(srcDir)) process.exit(0);

mkdirSync(destDir, { recursive: true });

const names = readdirSync(srcDir);
const grouped = new Map();

for (const name of names) {
  const chunk = name.match(/^(.+)\.(\d+)\.b64$/);
  if (chunk) {
    const [, stem, idx] = chunk;
    const list = grouped.get(stem) ?? [];
    list.push({ idx: Number(idx), name });
    grouped.set(stem, list);
    continue;
  }
  if (name.endsWith(".b64")) {
    const stem = name.replace(/\.b64$/, "");
    grouped.set(stem, [{ idx: 0, name }]);
  }
}

for (const [stem, parts] of grouped) {
  const text = parts
    .sort((a, b) => a.idx - b.idx)
    .map((p) => readFileSync(join(srcDir, p.name), "utf8").trim())
    .join("");
  writeFileSync(join(destDir, `${stem}.jpg`), Buffer.from(text, "base64"));
}
