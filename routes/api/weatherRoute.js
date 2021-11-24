import { Router } from 'express'
import { getWeather } from '../../controllers/weatherController.js';

const route = Router();

route.get('/:location', getWeather);

export default route;