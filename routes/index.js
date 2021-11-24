import {Router} from 'express'
import apiRoutes from "./api/index.js";

const route = Router(); 

route.use('/api/v1', apiRoutes);

export default route;