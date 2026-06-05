const cloudinary = require("./cloudinary");

const deleteFromCloudinary = async (publicId) => {
  try {
    return await cloudinary.uploader.destroy(publicId, {
      resource_type: "auto",
    });
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw error;
  }
};

module.exports = deleteFromCloudinary;