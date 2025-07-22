import {Router} from 'express';
import { getLocations, getLocationById } from '../controllers/locationsController.js';

const router = Router();

router.get('/', getLocations);

router.get('/:id', getLocationById);

export default router;
