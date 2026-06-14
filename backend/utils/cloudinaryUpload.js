const cloudinary = require("../config/cloudinary");
const path = require("path");

const uploadToCloudinary = async (fileBuffer, originalName = "", folder = "files-on-cloud", ) => {
  return new Promise((resolve, reject) => {
    // Extract the extension (e.g., '.docx')
    const ext = path.extname(originalName); 
    // Get the name without the extension to use as a clean public prefix
    const baseName = path.basename(originalName, ext); 

    // Generate a random suffix to avoid overwriting files with identical names
    const uniqueSuffix = Math.random().toString(36).substring(2, 8);
    
    // Construct a public ID that explicitly forces the extension into the path
    // Example output: "files-on-cloud/my-report-a7f2d" -> Cloudinary appends .docx
    const explicitPublicId = `${baseName}-${uniqueSuffix}${ext}`;

    cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type: "raw",
          public_id: explicitPublicId, // <-- Explicit custom path
          use_filename: true,          
          unique_filename: false, // Turned off since we manual-suffix for control
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            return reject(error);
          }

          console.log("Cloudinary Upload Success:", result);

          resolve({
            public_id: result.public_id,
            secure_url: result.secure_url,
            bytes: result.bytes,
          });
        }
      )
      .end(fileBuffer);
  });
};

module.exports = uploadToCloudinary;