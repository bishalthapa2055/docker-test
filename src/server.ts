import express from "express";
import { app } from "./app";

const start = async () => {
  const server = require("http").createServer(app);
  try {
    // const mongodb = config.app.mongoUrl;
    // mongoose.set("strictQuery", true);
    // await mongoose.connect(mongodb).then((res) => {
    //   console.log("Connected to mongoDb sucessfully");
    // });
  } catch (e) {
    console.log("ERROR :", e);
  }
  const port = 9090;
  server.listen(port, () => {
    console.log(
      `server sttarted at port: http://localhost:${port}`
    );
  });
};
start();
