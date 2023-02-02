const mongoose = require("mongoose");
// const dotenv=require("dotenv")
// dotenv.config()

const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }).then((data) => {
    console.log(`Mongodb connected with server${data.connection.host}`);
  });
};

module.exports = connectDatabase;
