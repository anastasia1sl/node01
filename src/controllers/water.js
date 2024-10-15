import createHttpError from 'http-errors';
import { addWaterDataService } from '../services/water.js';

export const createWaterController = async (req, res) => {
  const data = await addWaterDataService(req.body);
  res.status(201).json({
    status: 201,
    message: `Successfully created a waterItem!`,
    data,
  });
};
