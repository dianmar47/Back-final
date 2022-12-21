const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const auth = require("./routes/auth");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");

const app = express();
app.use(express.json({ extended: true }));

connectDB();
app.use(cors());

// my routes
app.use("/api/user", userRoutes);
app.use("/api/auth", auth);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

app.listen(4000, () => {
  console.log("Este servidor esta corriendo en el puerto 4000");
});
