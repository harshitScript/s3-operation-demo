const express = require("express");
const { config } = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const globalErrorHandlerMiddleware = require("./middleware/globalErrorHandlerMiddleware");
const awsS3OperationsRoutes = require("./routes/aws-s3-operations-routes");
const { logStream } = require("./logs");

const app = express();
config();

app.use(helmet());
app.use(morgan("combined", { stream: logStream }));
app.use(awsS3OperationsRoutes);
app.use(notFoundMiddleware);
app.use(globalErrorHandlerMiddleware);

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    logStream.write(
      `Unable to start ${process.env.APP_PHASE} server at port:${
        process.env.PORT || 4000
      }.\n`
    );

    return console.log(
      `Unable to start ${process.env.APP_PHASE} server at port:${
        process.env.PORT || 4000
      }.`
    );
  }

  logStream.write(
    `${process.env.APP_PHASE} server started at the port ${
      process.env.PORT || 4000
    }.\n`
  );

  return console.log(
    `${process.env.APP_PHASE} server started at the port ${
      process.env.PORT || 4000
    }.`
  );
});
