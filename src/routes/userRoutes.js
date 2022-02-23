import express from 'express';

import userController from '../controllers/userController.js';

let router = express.Router();

router.post('/cadastro', register);

export default router;
