import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : https://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening); // 4000번 포트로!
