import express from 'express';

import userController from '../controllers/userController.js';

import userEmail from '../controllers/userEmail.js';

let router = express.Router();

router.post('/cadastro', userController.register);

// router.get('/send', userController.sendEmail);

export default router;
