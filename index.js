const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Merhaba Dünya');
});

app.listen(port, () => {
  console.log(`Server started at http://${hostname}:${port}/`);
});
