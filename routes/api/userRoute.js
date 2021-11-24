import { Router } from 'express';
import bodyParser from 'body-parser';
import { get, postUser, updateUser, getAll} from '../../controllers/userController.js';

const route = Router();
//Here we define the endpoint to use the CRUD for the users assignment #4
route.get('/view', getAll);

route.get('/view/:id', get);

route.post('/add', postUser);

route.patch('/edit/:id', updateUser);

export default route;