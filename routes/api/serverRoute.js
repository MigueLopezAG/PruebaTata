const router = require('express').Router();
import { getWeather } from '../../controllers/weatherController';

router.get('/', getWeather);

export default router;