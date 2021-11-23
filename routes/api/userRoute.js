const router = require('express').Router();
import { get, getAll, postUser, updateUser} from '../../controllers/userController';

router.get('/', getAll);
router.get('/:id', get);
router.post('/', postUser);
router.patch('/:id', updateUser)

export default router;