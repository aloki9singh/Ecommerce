const express = require("express");
const { errorMiddleware } = require("./middleware/error");
const router = require("./Routes/productRoute");

const app = express();
app.use(express.json())


app.use("/api/v1",router)

app.use(errorMiddleware)
module.exports = app
