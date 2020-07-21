const express = require("express");

const createHtmlRoutes = require("./app/routes/html-routes.js");
const createApiRoutes = require("./app/routes/api-routes.js");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
createApiRoutes(app);
// Here we introduce HTML routing to serve different HTML files
createHtmlRoutes(app);

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
