// utils/validateFileSignature.js

const fs = require("fs");
const path = require("path");
const { fileTypeFromBuffer } = require("file-type");

const SIGNATURE_CHECK_EXTENSIONS = new Set([
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".bmp",
  ".tiff",
  ".zip",
  ".rar",
  ".7z",
  ".gz",
  ".mp4",
  ".mp3",
  ".wav",
  ".avi",
  ".mov",
  ".mkv",
  ".webm",
  ".flac",
  ".ogg"
]);

async function validateFileSignature(filePath, originalName) {

  const uploadedExt = path.extname(originalName).toLowerCase();

  // Skip magic-byte validation for text-based files
  if (!SIGNATURE_CHECK_EXTENSIONS.has(uploadedExt)) {
    return {
      valid: true
    };
  }
  const buffer = await fs.promises.readFile(filePath);

  const detectedType = await fileTypeFromBuffer(buffer);

  if (!detectedType) {
    return {
      valid: false,
      reason: "Unable to determine file type"
    };
  }

  if (uploadedExt !== `.${detectedType.ext}`) {
    return {
      valid: false,
      reason: `Extension mismatch. Expected .${detectedType.ext}`
    };
  }

  return {
    valid: true,
    detectedType
  };
}

module.exports = validateFileSignature;