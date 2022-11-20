const { s3 } = require("../aws/s3");

const s3UploadsFileDeleteController = (req, res, next) => {
  const { filename } = req.params;

  try {
    s3.deleteObject({ Bucket: process.env.S3_BUCKET, Key: filename });
  } catch (error) {
    next(error);
  }
};
module.exports = s3UploadsFileDeleteController;
