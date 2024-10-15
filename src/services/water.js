import WaterCollection from '../db/models/water.js';

export const addWaterDataService = async (data) => {
  const waterItem = await WaterCollection.create(data);
  return waterItem;
};
