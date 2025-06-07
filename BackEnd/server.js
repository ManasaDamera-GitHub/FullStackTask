const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const AnimalRoutes = require("./Routes/AnimalRoutes");

const app = express();

app.use(express.json());
app.use("/animal", AnimalRoutes);
app.use("/save", AnimalRoutes);
app.use("/update", AnimalRoutes);
app.use("/delete", AnimalRoutes);

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("mongodb connected"))
  .then(() => {
    app.listen(process.env.Port, () => {
      console.log(
        `server is running on port http://localhost:${process.env.Port}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
