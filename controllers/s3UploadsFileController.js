const { s3 } = require("../aws/s3");

const s3UploadsFileController = async (req, res, next) => {
  const { filename } = req.params;

  try {
    const response = await s3
      .getObject({
        Bucket: process.env.S3_BUCKET,
        Key: `s3-operations-demo/${filename}`,
      })
      .promise();

    return res.send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = s3UploadsFileController;
