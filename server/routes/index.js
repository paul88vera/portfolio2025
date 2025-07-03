const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes); // all routes

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>"); // error message
});

module.exports = router;
