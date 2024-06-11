const express = require('express');
const helmet = require('helmet');

const app = express(); // initialize server app with express
app.use(express.json()); // allow server to receive json data

// cors
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self' https://fonts.gstatic.com;");
   next();
});

// routes
app.get('/', async (req, res) => {
   try {
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));