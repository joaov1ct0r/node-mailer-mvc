import { express } from 'express';

import { register } from '../controllers/userController';
let router = express.Router();

router.get('/cadastro');

export default router;
