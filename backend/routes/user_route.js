import express from 'express'

import protectRoute from '../middleware/protect_route.js';
import { addToCart , getCart} from '../controller/user_controller.js';


const router = express.Router();

router.post('/cart/:prdid',protectRoute,addToCart)
router.get('/cart/',protectRoute,getCart)


export default router;