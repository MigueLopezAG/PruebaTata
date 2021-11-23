const router = require('express').Router();
import { get, getAll, postUser, updateUser} from '../../controllers/userController';

router.get('/view', getAll);
router.get('/view/:id', get);
router.post('/add', postUser);
router.patch('/edit/:id', updateUser)

export default router;