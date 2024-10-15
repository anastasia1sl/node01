import { Router } from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import isValidId from '../middlewares/isValidId.js';
import { createWaterSchema } from '../validation/water.js';
import { createWaterController } from '../controllers/water.js';

const waterRouter = Router();

waterRouter.post(
  '/',
  validateBody(createWaterSchema),
  ctrlWrapper(createWaterController),
);

export default waterRouter;
