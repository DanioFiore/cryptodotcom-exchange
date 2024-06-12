import express from 'express';
import UsersController from '../controllers/UsersController.js';

const router = express.Router();

router.get('/users', UsersController.getAllUsers);

export default router