const router = require('express').Router();
import { logInfo } from '../../controllers/eventController';

router.get('/', logInfo);

export default router;