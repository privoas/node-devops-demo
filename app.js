const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/download', (req, res) => {
  res.send('Downloading item...');
});

app.post('/issues', (req, res) => {
  res.send('Posting issue'); 
}

app.listen(4000, () => console.log('running server'));
