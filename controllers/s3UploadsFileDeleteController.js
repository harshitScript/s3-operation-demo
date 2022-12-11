const { s3 } = require("../aws/s3");

const s3UploadsFileDeleteController = async (req, res, next) => {
  const { filename } = req.params;

  try {
    await s3
      .deleteObject({ Bucket: process.env.S3_BUCKET, Key: filename })
      .promise();
  } catch (error) {
    next(error);
  }
};
module.exports = s3UploadsFileDeleteController;
