import * as express from 'express';
import { trackController } from '../controllers/track';

const router = express.Router();

router.post('/', trackController.create);

export default router;