const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const routeManager = require("./routes");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", routeManager);

const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
