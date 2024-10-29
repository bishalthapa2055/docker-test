import express from "express";
import cors from "cors";
import User from "./model/user";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use( cors());

// app.use("/api/v1/", indexRouter);
app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Server is Live !!!",
  });
});


app.get("/apple", (req, res) => {
    res.status(200).json({
      status: true,
      message: "Hello from apple",
    });
});

app.get("/banana", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Hello from banana",
  });
});


app.get("/users", async(req, res) => {
  const users = await User.find({});
  res.status(200).json({
    status: true,
    data : users ,
    message: "Hello from apple",
  });
});

  
app.all("*", (req, res) => {
  res.status(400).json({ status: false, message: "Unable to find the routes" });
});

export { app };
