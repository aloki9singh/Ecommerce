const cookieParser = require("cookie-parser");
const express = require("express");
const { errorMiddleware } = require("./middleware/error");
const router = require("./Routes/productRoute");
const Userrouter = require("./Routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", router);
app.use("/api/v1", Userrouter);

app.use(errorMiddleware);
module.exports = app;
