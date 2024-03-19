import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import router from "./router";

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
  })
);
app.use("/", router());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

mongoose.Promise = Promise;
mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.connection.on("error", (error: Error) => console.log(error));
