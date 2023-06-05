/** @format */

const express = require("express");
const { connectDB } = require("./config/db");
const app = express();
const port = 3000;

const detailsRoute = require("./routes/detailsRoute");
const skillsRoute = require("./routes/skillsRoute");

connectDB();

// Middware boodyparser
app.use(express.json());

// API endpoint
app.use("/api/details", detailsRoute);
app.use("/api/skills", skillsRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
