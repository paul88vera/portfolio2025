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

//uploadthing route
// app.use(
//   "/api/uploadthing",
//   createUploadthingExpressHandler({
//     router: {
//       photoUploader: {
//         // This must match your UploadThing dashboard config
//         onUploadComplete: async ({ metadata, file }) => {
//           console.log("Upload complete", file.url);
//         },
//       },
//     },
//     config: {
//       uploadthingSecret: process.env.UPLOADTHING_SECRET,
//     },
//   })
// );

// listener
app.listen(PORT, () => {
  console.log("server is on", PORT); // put a condition for an error here later
});
