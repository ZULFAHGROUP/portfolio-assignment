/** @format */

const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const connectDB = async () => {
  try {
    await client.connect();

    console.log("Mongodb connection established");
  } catch (error) {
    console.log("Mongodb connection failed: " + error);
    client.close();
  }
};

const something = client.db("portfolio");
const details = something.collection("details");
const skills = something.collection("skills");

module.exports = { connectDB, details, skills };
