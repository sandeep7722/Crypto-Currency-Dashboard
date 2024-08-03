import { Router } from 'express';
import { getData } from '../controllers/dataController';

const router = Router();

router.get('/coin-data', getData);

export default router;
