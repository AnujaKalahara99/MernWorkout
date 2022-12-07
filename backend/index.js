require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

const app = express();
app.use(express.json());

app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on Port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
