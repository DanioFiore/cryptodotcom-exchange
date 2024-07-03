const express = require('express');
const app = express(); // initialize server app with express
const helmet = require('helmet');
const UsersRoutes = require('./routes/UsersRoutes');





app.use(express.json()); // allow server to receive json data

// cors
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline';");
   next();
});

// SET SECURITY HEADERS
app.use(helmet());

// routes
app.use('/api/users', UsersRoutes);

const PORT = process.env.NODE_DOCKER_PORT || 3100;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));