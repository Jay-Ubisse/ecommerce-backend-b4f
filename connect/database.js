const mongoose = require("mongoose");
DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(DB_URL);

    console.log(`Base de dados conectada: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
