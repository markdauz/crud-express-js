const express = require("express");

const ideasController = require("../controllers/ideas");

const route = express.Router();

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
