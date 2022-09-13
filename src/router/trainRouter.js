import {Router} from 'express';
import trainController from "../controllers/TrainController.js";

const trainRouter = Router();

trainRouter.get('/train', trainController.allTrains);
trainRouter.post('/train', trainController.createTrain);

export default trainRouter;