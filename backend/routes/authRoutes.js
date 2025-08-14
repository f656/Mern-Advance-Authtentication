import express from 'express'
import { checkAuth, forgotPassword, login, logout, register, resetPassword, verifyEmail } from '../controllers/authController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const authRouter = express.Router();

authRouter.get('/check-auth',verifyToken,checkAuth);

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/verify-email',verifyEmail)
authRouter.post('/forgot-password',forgotPassword)
authRouter.post('/reset-password/:token',resetPassword)


export default authRouter