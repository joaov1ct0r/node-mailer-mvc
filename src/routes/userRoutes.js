import { express } from 'express';

import { register } from '../controllers/userController';

let router = express.Router();

router.post('/cadastro', register);

export default router;
