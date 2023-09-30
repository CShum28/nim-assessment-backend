const express = require("express");
require("dotenv").config();
const cors = require("cors");
const getLogger = require("./logger");
const apiRouter = require("./routes/apiRouter");
const menuRouter = require("./routes/menuRouter");

const { PORT } = process.env;
const logger = getLogger("server");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);
app.use("/api/menu", menuRouter);

const server = app.listen(PORT, () => {
  logger.log(`Server running on port ${PORT}`);
});

module.exports = server;
