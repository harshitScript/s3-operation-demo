const serverConfigurationController = (req, res, next) => {
  return res.json({
    server: process.env.SERVER_NAME,
    phase: process.env.APP_PHASE,
    port: process.env.PORT || 4000,
    endpoints: {
      ["POST /s3-upload"]: "This route is used to upload a file to s3 bucket.",
      ["GET /s3-uploads-list"]:
        "This route is used to get all the available files inn the s3 bucket",
      ["GET /s3-uploads/:filename"]:
        "Ths route is used to get download a particular file from bucket.",
      ["DELETE /s3-uploads/:filename/delete"]:
        "This route is used to delete a file from the s3 bucket.",
    },
  });
};

module.exports = serverConfigurationController;
