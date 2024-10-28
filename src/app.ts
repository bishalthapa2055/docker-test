import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

  
app.all("*", (req, res) => {
  res.status(400).json({ status: false, message: "Unable to find the routes" });
});

export { app };
