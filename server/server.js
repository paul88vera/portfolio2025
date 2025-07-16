const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors"); // --> turn on later

const PORT = process.env.PORT || 9000; // Need to put localhost as well

// middleware
app.use(express.json());
app.use(cors()); //--> turn on later

// all routes
app.use(routes);

// listener
app.listen(PORT, () => {
  console.log("server is on", PORT); // put a condition for an error here later
});
