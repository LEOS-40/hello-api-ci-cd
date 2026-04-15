const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Hello API listening on port ${port}`);
  });
}

module.exports = app;