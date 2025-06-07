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

router.post("/", async (req, res) => {
  try {
    const newCard = new Animal({
      name: req.body.name,
      image: req.body.image,
    });
    await newCard.save();
    res.send("data inserted");
  } catch (error) {
    console.log(error);
    res.send("error occured");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        image: req.body.image,
      },
      { new: true }
    );
    if (!updatedAnimal) {
      return res.status(404).send("data not found");
    }
    res.json(updatedAnimal);
  } catch (error) {
    res.send("error updating animal");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    if (!deletedAnimal) {
      return res.send("animal not found");
    }
    res.send("Animal deleted successfully");
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
