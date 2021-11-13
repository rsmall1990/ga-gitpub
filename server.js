// require dependencies
require("dotenv").config();
const express = require("express");
const drinks = require("./models/drinks.js") // <-- must use relative file path to require

// initialize app
const app = express();

// config application settings
const port = process.env.PORT; // configure port

// handle data


// mount middleware

// Always think INDUCES
// Welcome Route
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
});

// Index
app.get("/drinks", (req, res) => {
    res.render("./drinks_index.ejs", {
        drinks
    });
})

// New
// Delete
// update
// Create
// edit
// Show
app.get("/drinks/:id", (req,res) => {
    res.send(req.params.id);
});

// tell app to listen
app.listen(port, () => console.log("Express is listening on port ", port));