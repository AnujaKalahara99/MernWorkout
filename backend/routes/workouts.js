const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "GET workout with ID" });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete workout with ID" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH workout with ID" });
});

module.exports = router;
