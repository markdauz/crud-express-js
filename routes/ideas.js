const express = require("express");
const mongoose = require("mongoose");

const route = express.Router();

require("../models/Idea");
const Idea = mongoose.model("ideas");

/**
 * POST IDEA
 */
route.post("/", async (req, res, next) => {
  const data = new Idea({
    title: req.body.title,
    details: eq.body.details,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * GET ALL IDEAS
 */
route.get("/", async (req, res, next) => {
  try {
    const data = await Idea.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET IDEA BY ID
 */
route.get("/:id", async (req, res) => {
  try {
    const data = await Idea.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * UPDATE IDEA BY ID
 */
route.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Idea.findByIdAndUpdate(id, updatedData, options);

    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * DELETE IDEA BY ID
 */
route.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Idea.findByIdAndDelete(id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = route;
