const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://Mitumial:l8m9ElCHm5hFt6sp@cluster0.2uzrd2n.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB conectado en :${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
