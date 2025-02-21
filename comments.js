// Create web server with Express.js and serve the comments.json file on /comments path
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred. Please try again later.');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});