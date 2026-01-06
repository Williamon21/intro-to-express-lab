// Import Express
const e = require('express');
const express = require('express')

// Create an Express app
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

// Define routes here (we'll add them soon)

//exercise 1
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`);
});

//exercise 2
app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    if (number){
        const roll = Math.floor(Math.random() * number) + 1;
        res.send(`You rolled a ${roll}!`);
    } else {
        res.send("Please specify a number");
    }
});

//exercise 3
app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
    if(req.query.q) res.send(`You searched for: ${req.query.q}`);
    if (!req.query.q) res.send("Please add a query param of 'q'")
});
// Listen for requests on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000')
})


