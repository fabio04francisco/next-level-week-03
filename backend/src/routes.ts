import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OphanagesController';

const upload = multer(uploadConfig);

const routes = Router();


routes.get('/orphanages', upload.array('images'), OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);
export default routes;