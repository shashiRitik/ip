const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  req.userIP = ipAddress;
  next();
});

app.get('/', (req, res) => {
  res.send(`Your IP address is: ${req.userIP}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
