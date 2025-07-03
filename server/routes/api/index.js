const express = require("express");
const router = express.Router();
const projectRoute = require("./projects");

router.use("/projects", projectRoute);

module.exports = router;
