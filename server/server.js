const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5001;

// routes
const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const authRoute = require("./routes/auth.js");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(express.json())
app.use(cors())

app.use("/server/categories", categoryRoute);
app.use("/server/products", productRoute);
app.use("/server/bills", billRoute);
app.use("/server/auth", authRoute);

app.listen(port, () => {
    connect();
  console.log(`Example app listening on port ${port}`);
});
