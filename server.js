const express = require('express');
const app = express(); // initialize server app with express
const connectDB = require('./db/db.js');
const web = require('./routes/web.js');
app.use(express.json()); // allow server to receive json data
app.use('/api', web);
// cors
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline';");
   next();
});

const PORT = process.env.PORT || 3100;
const DATABASE_URL = process.env.DATABASE_URL;

// db connection
connectDB(DATABASE_URL);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));