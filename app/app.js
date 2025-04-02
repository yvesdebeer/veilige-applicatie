const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welkom bij de veilige applicatie!');
});

app.listen(3000, () => {
  console.log('Server draait op http://localhost:3000');
});
