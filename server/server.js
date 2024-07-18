import express from 'express';
const app = express(); // initialize server app with express
import helmet from 'helmet';
import UsersRoutes from './routes/UsersRoutes';
import connectDB from './db/db';

connectDB();

process.on('uncaughtException', err => {
   console.log(err);
   process.exit(1);
});

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

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on('unhandledRejection', err => {
   server.close(() => {
      console.log(err);
      process.exit(1);
   });
});