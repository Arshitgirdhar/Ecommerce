const mongoose = require("mongoose");

let mongo_Url ="mongodb+srv://yashikagulati:123@cluster0.rqdx7y6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongo_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
};

module.exports = connectDB;
