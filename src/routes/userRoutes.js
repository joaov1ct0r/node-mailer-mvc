import express from 'express';

import userController from '../controllers/userController.js';

let router = express.Router();

router.post('/cadastro', userController.register);

export default router;
