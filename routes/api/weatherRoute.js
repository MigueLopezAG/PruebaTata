const router = require('express').Router();
import { getWeather } from '../../controllers/weatherController';

router.get('/:location', getWeather);

export default router;