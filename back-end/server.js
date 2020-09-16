import express from "express";
import mongoose from "mongoose";

// App Config
const app = express(); // create app instance
const port = process.env.PORT || 8000;
const connection_url = `mongodb+srv://admin:jbGoFSxLJ3LtvIh4@cluster0.weytf.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// Middlewares

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("HELLO CLEAVER PROGRAMMERS");
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
