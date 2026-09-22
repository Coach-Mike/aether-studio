import { mkdirSync, readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src/plates-b64");
const destDir = join(root, "public/plates");

if (!existsSync(srcDir)) process.exit(0);

mkdirSync(destDir, { recursive: true });

for (const name of readdirSync(srcDir)) {
  if (!name.endsWith(".b64")) continue;
  const buf = Buffer.from(readFileSync(join(srcDir, name), "utf8"), "base64");
  writeFileSync(join(destDir, name.replace(/\.b64$/, ".jpg")), buf);
}
