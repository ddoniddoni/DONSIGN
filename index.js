import express from "express";
import router from "./router/main";
const app = express();
const PORT = 5000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("hello");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);
