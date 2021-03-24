const express = require("express");
const router = express.Router();

const newsController = require("../controllers/news");
const authenticate = require("../middleware/authenticate");

// Routes

router.get("/", newsController.getAllNewsController); // Get all data

router.get("/:id", newsController.getOneNewsController); // Get one data

router.post("/", newsController.createNewsController); // Create data

router.put("/:id", authenticate, newsController.updateNewsController); // Update data

router.delete("/:id", authenticate, newsController.deleteNewsController); // Delete data

module.exports = router;
