import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.cwd());
const inputPath = path.join(root, "public", "uredski-sjaj-zapad.png");
const tempPath = path.join(root, "public", "uredski-sjaj-zapad.trim.png");

async function trimLogo() {
  try {
    // Trim bordering pixels similar to top-left background color
    // Adjust threshold if needed (0-255). 10 usually works for near-white borders.
    await sharp(inputPath).trim({ threshold: 10 }).png({ compressionLevel: 9 }).toFile(tempPath);

    // Replace original file atomically
    await fs.rename(tempPath, inputPath);
    console.log("✔ Trimmed border and updated:", inputPath);
  } catch (err) {
    console.error("✖ Failed to trim logo:", err);
    process.exitCode = 1;
  }
}

trimLogo();


