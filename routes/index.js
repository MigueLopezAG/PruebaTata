import {Router} from 'express'
import apiRoutes from "./api/index.js";

const route = Router(); 
// Here define the structure of our server
route.use('/api/v1', apiRoutes);

export default route;