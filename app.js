const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const csvtojson = require("csvtojson");
const { connectWithDb } = require("./config/db");

app.use(express.json());

app.get("/convert-csv-to-json", async (req, res) => {
  try {
    await connectWithDb();
    const collection = mongoose.connection.db.collection("testfile");
    const csvData = await collection.find({}).toArray();

    console.log(csvData);

    if (!csvData || csvData.length === 0) {
      return res.status(404).send("CSV data not found");
    }

    res.json(csvData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error connecting to MongoDB");
  }
});

module.exports = app;
