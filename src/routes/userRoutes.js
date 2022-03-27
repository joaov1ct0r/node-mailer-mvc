import express from 'express';

import { register, sendEmail } from '../controllers/userController.js';

let router = express.Router();

router.post('/cadastro', register);

router.post('/send', sendEmail);

export default router;
