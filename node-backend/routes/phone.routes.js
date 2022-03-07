const express = require("express");
const app = express();

const phoneRoute = express.Router();
let Phone = require("../model/Phone");

// Add phone
phoneRoute.route("/add-phone").post((req, res, next) => {
  Phone.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all phone
phoneRoute.route("/").get((req, res) => {
  Phone.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get once phone
phoneRoute.route("/read-phone/:id").get((req, res) => {
  Phone.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update phone
phoneRoute.route("/update-phone/:id").put((req, res, next) => {
  Phone.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Phone Updated Success!");
      }
    }
  );
});

// Delete phone
phoneRoute.route("/delete-phone/:id").delete((req, res, next) => {
  Phone.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = phoneRoute;
