const mongoose = require("mongoose");

const url = process.env.URL;

const connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database Connected ");
  } catch (error) {
    console.log(`Not Connected Database`, error);
  }
};
module.exports = connection;
