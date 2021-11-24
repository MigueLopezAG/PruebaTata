import {Router} from 'express'
import { logInfo } from '../../controllers/eventController.js';

const route = Router(); 
//we define the route for the assigment #3 we need to send a post action and in the body we have to send the INput with the 2 number to sum
route.post('/', logInfo);

export default route;