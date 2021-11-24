import { Router } from 'express'
import { get, postUser, updateUser} from '../../controllers/userController.js';

const route = Router();

route.get('/view/:id', get);
route.post('/add', postUser);
route.patch('/edit/:id', updateUser)

export default route;