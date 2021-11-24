import { Router } from 'express'
import { getWeather } from '../../controllers/weatherController.js';

const route = Router();
//we define the route to get the current weather of an API and save the response ina JSON
route.get('/:location', getWeather);

export default route;