const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models");

const PORT = process.env.PORT || 8080;
var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
const userRouter = require("./routes/user");

app.use("/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {});
});
