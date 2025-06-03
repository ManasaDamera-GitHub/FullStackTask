const express = require("express");
const router = express.Router();
const Animal = require("../Models/AnimalSchema");

router.get("/", async (req, res) => {
  try {
    const data = await Animal.find();
    res.json(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
