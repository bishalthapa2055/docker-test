import express from "express";
import { app } from "./app";
import ip from "ip";
import mongoose from "mongoose";

const start = async () => {
  const server = require("http").createServer(app);
  try {
    const mongodb = "mongodb://localhost:27017/dockers";
    mongoose.set("strictQuery", true);
    await mongoose.connect(mongodb).then((res) => {
      console.log("Connected to mongoDb sucessfully");
    });
  } catch (e) {
    console.log("ERROR :", e);
  }
  const port = 9090;
  server.listen(port, () => {
    console.log(
      `server sttarted at port: http://${ip.address()}:${port}`
    );
  });
};
start();
