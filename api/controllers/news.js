const News = require("../models/News");

// Get all contact controller
const getAllNewsController = (req, res, next) => {
  News.find()
    .then((news) => {
      res.status(200).json({
        message: "All News",
        news,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error occured",
        err,
      });
    });
};

// Get one Contact controller
const getOneNewsController = (req, res, next) => {
  const { id } = req.params;
  News.findById(id)
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: "Contact Found",
          data,
        });
      } else {
        res.status(404).json({
          message: "Contact Not Found",
          id,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error occured.",
        err,
      });
    });
};

// Create new contact controller
const createNewsController = (req, res, next) => {
  const { heading, short_description, description } = req.body;

  const news = new News({
    heading,
    short_description,
    description,
    created_at: new Date(),
  });
  news
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Contact Created",
        data,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

// Update Contact controller
const updateNewsController = (req, res, next) => {
  const { id } = req.params;
  const UpdatedNews = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };

  News.findByIdAndUpdate(id, { $set: UpdatedNews })
    .then((data) => {
      News.findById(id).then((newData) => {
        res.status(200).json({
          message: "Contact Updated",
          newData,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error occured",
        err,
      });
    });
};

// Delete Contact controller
const deleteNewsController = (req, res, next) => {
  const { id } = req.params;
  News.findByIdAndDelete(id)
    .then((data) => {
      res.status(200).json({
        message: "News Deleted",
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error occured",
        err,
      });
    });
};

module.exports = {
  getAllNewsController,
  getOneNewsController,
  createNewsController,
  updateNewsController,
  deleteNewsController,
};
