// Load express module with `require` directive
const express = require('express');
const app = express();
const port = 8000;

// Define request response in root URL (/)
app.get('/', function (req, res) {
  const name = req.query.name ? req.query.name: 'Bangladesh'
  res.send(`Hello From ${name}`)
})

// Define request response for about page
app.get('/about', function (req, res) {
  res.send(`<h3>About page Keep Going</h3>`)
})

if (process.env.NODE_ENV === 'test') {
  module.exports = app
} else {
  // Launch listening server on a port
  app.listen(port, function () {
    console.log('App is listening on port ' + port)
  })
}
