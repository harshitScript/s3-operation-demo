const multer = require("multer");
const multerS3 = require("multer-s3");
const { s3 } = require("../aws/s3");

const s3Upload = multer({
  storage: multerS3({
    bucket: `${process.env.S3_BUCKET}/s3-operations-demo`,
    s3,
    acl: "public-read",
    key: (req, file, cb) => {
      return cb(null, file.originalname);
    },
    contentDisposition: "attachment",
  }),
});

module.exports = s3Upload;
