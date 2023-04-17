const express = require("express");
const app = express();
require("dotenv").config();
require("./Db/db");

const users = require("./Models/crud.model");

const cors = require("cors");
const router=require("./Routes/crud.route")
app.use(cors());
app.use(express.json())

app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
