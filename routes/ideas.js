const express = require("express");
const route = express.Router();

const ideasController = require("../controllers/ideas");
const requireAuth = require("../middleware/requireAuth");

// Require for all authorized route
route.use(requireAuth);

/**
 * POST IDEA
 */
route.post("/", ideasController.postIdea);

/**
 * GET ALL IDEAS
 */
route.get("/", ideasController.getIdeas);

/**
 * GET IDEA BY ID
 */
route.get("/:id", ideasController.getIdea);

/**
 * UPDATE IDEA BY ID
 */
route.patch("/update/:id", ideasController.updateIdea);

/**
 * DELETE IDEA BY ID
 */
route.delete("/delete/:id", ideasController.deleteIdea);

module.exports = route;
