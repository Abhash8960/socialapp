require("dotenv").config({ path: "backend/config/config.env" });
const express = require("express");
const connection = require("./config/database.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("cloudinary");
const path = require("path");

const app = express();
const port = process.env.PORT;

cloudinary.config({
  cloud_name: process.env.CLOUDINART_NAME,
  api_key: process.env.CLOUDINART_API_KEY,
  api_secret: process.env.CLOUDINART_API_SECRET,
});

//middlewere
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

//routing
app.use("/", require("./routes/post"));
app.use("/", require("./routes/user"));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server Is Running At Port Number ${port}`);
});

connection();
