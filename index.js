const express = require("express");
const dbConnection = require("./config/dbConnection");
const routes = require("./config/routes");
const app = express();
const port = 8002;
app.use(express.json());
app.use("/api", routes);
dbConnection();
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
