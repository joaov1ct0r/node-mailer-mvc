import express from 'express';

import { register, sendEmail } from '../controllers/userController.js';

let userRouter = express.Router();

userRouter.post('/cadastro', register);

userRouter.post('/send', sendEmail);

export default router;
