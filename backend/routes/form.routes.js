const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



let Forms = require('../models/Forms');

const path = require('path');
console.log("path", path.join(__dirname))

router.route('/').get((req, res, next) => {
    Forms.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(`Error:${err}`));
   
  })

  //Add new data
router.route('/create-form').post( (req, res, next) => {
    const newCustomer = new Forms({
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      Email: req.body.Email,
      Bio:req.body.Bio,
      Gender: req.body.Gender,
      Courses:req.body.Courses,
    });
    newCustomer
      .save()
      .then((result) => {
        res.status(201).json({
          message: " successfully!",
          userCreated: {
            Firstname: result.Firstname,
            Lastname: result.Lastname,
            Email: result.Email,
            Bio:result.Bio,
            Gender: result.Gender,
            Courses:result.Courses

          }
        })
      })
      .catch((err) => res.status(400).json(`Error:${err}`))
  })

  module.exports = router;