// html-routes.js - this file offers a set of routes for sending users to the
// various html pages

// Dependencies
const path = require("path");

// Routes
module.exports = function (app) {
  // Each of the below routes handles the HTML page that the user gets sent
  // to.

  // index route loads view.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed
  app.get("/all", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });
};
