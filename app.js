// Load express module with `require` directive
const express = require('express');
const app = express();
const port = 8000;

// Define request response in root URL (/)
app.get('/', function (req, res) {
  const name = req.query.name ? req.query.name: 'Bangladesh'
  res.send(`Hello From ${name}`)
})

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 8000);
module.exports = app;
