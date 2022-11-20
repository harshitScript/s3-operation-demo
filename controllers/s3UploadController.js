const s3UploadController = (req, res, next) => {
  const { file } = req;

  if (file) {
    return res.status(201).json({
      message: "Image stored successfully in s3 bucket.",
      url: `${file.location}`,
    });
  }

  const error = new Error("File upload failed to s3.");
  error.status = 421;
  throw error;
};
module.exports = s3UploadController;
