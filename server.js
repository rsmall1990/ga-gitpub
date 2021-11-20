// require dependencies
require("dotenv").config();
const express = require("express");
const drinks = require("./models/drinks.js"); // <-- must use relative file path to require
const food = require("./models/food.js");

// initialize app
const app = express();

// config application settings
const port = process.env.PORT; // configure port

// handle data

// mount middleware

// Always think INDUCES
// Welcome Route
app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

// Index
app.get("/drinks", (req, res) => {
  res.render("./drinks_index.ejs", {
    drinks,
  });
});

app.get("/food", (req, res) => {
  res.render("./food_index.ejs", {
    food,
  });
});

// New
// Delete
// update
// Create
// edit

// Show
app.get("/drinks/:id", (req, res) => {
  res.render("./drinks_show.ejs", {
    drink: drinks[req.params.id],
  });
});

app.get("/food/:id", (req, res) => {
    res.render("./food_show.ejs", {
      food: food[req.params.id],
    });
  });

// tell app to listen
app.listen(port, () => console.log("Express is listening on port ", port));
