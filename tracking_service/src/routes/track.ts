import * as express from 'express';
import { trackController } from '../controllers/track';

const router = express.Router();

router.post('/', trackController.create);
router.get('/', trackController.getAll);

export default router;