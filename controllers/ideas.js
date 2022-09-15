require("../models/Idea");

const mongoose = require("mongoose");
const Idea = mongoose.model("ideas");

/**
 * POST IDEA
 */
exports.postIdea = async (req, res, next) => {
  const data = new Idea({
    title: req.body.title,
    details: req.body.details,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * GET IDEAS
 */
exports.getIdeas = async (req, res, next) => {
  try {
    const data = await Idea.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET IDEA BY ID
 */
exports.getIdea = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such idea" });
    }

    const data = await Idea.findById(id);
    if (!data) {
      return res.status(404).json({ error: "No such idea" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * UPDATE IDEA BY ID
 */
exports.updateIdea = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such idea" });
    }
    const updatedData = req.body;
    const options = { new: true };

    const result = await Idea.findByIdAndUpdate(
      { _id: id },
      updatedData,
      options
    );

    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * DELETE IDEA
 */
exports.deleteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such idea" });
    }

    const data = await Idea.findByIdAndDelete({ _id: id });
    if (!data) {
      return res.status(404).json({ error: "No such idea" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
