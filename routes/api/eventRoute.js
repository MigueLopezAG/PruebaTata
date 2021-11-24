import {Router} from 'express'
import { logInfo } from '../../controllers/eventController.js';

const route = Router(); 

route.get('/', logInfo);

export default route;