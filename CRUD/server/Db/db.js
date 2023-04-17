const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose
  .connect(process.env.MONGOOSE_URL, {
     useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conected to MongoDb"))
  .catch((err) => console.log(err.message));
