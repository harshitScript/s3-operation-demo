const { s3 } = require("../aws/s3");

const s3UploadsListController = async (req, res, next) => {
  try {
    const response = await s3
      .listObjectsV2({
        Bucket: process.env.S3_BUCKET,
      })
      .promise();

    const listOfFilename = response.Contents.map((obj) => obj.Key);

    return res.json({
      list: listOfFilename,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = s3UploadsListController;
