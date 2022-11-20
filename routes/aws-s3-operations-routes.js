const express = require("express");
const s3UploadController = require("../controllers/s3UploadController");
const s3UploadsFileController = require("../controllers/s3UploadsFileController");
const s3UploadsFileDeleteController = require("../controllers/s3UploadsFileDeleteController");
const s3UploadsListController = require("../controllers/s3UploadsListController");
const s3Upload = require("../multer/multer.config");
const awsS3OperationsRoutes = express.Router();

awsS3OperationsRoutes.post(
  "/s3-upload",
  s3Upload.single("file"),
  s3UploadController
);

awsS3OperationsRoutes.get("/s3-uploads-list", s3UploadsListController);

awsS3OperationsRoutes.get("/s3-uploads/:filename", s3UploadsFileController);

awsS3OperationsRoutes.delete("/s3-uploads/:filename/delete", s3UploadsFileDeleteController);

module.exports = awsS3OperationsRoutes;
