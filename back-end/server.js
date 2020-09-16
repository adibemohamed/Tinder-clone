import express from "express";
import mogoose from "mongoose";

// App Config
const app = express(); // create app instance
const port = process.env.PORT || 8000;

// Middlewares

// DB config

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("HELLO CLEAVER PROGRAMMERS");
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
