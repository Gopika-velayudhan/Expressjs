const express = require('express');
const app = express();
const port = 3000;

app.get('/example', (req, res) => {
  
  const name = req.query.name;
  const age = req.query.age;

  
  res.send(`Hello ${name}! You are ${age} years old.`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
