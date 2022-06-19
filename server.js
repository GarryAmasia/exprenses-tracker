import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

//for api

//for front end static content
app.get("/", (req, res) => {
  res.send("we ll send react app here");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`server is running at port http://localhost:${PORT}`);
});
