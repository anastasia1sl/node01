import Joi from 'joi';

export const createWaterSchema = Joi.object({
  date: Joi.string().required(),
  time: Joi.string().required(),
  value: Joi.number().min(50).max(5000).required(),
});

// export const updateWaterDataSchema = Joi.object({
//   date: Joi.string(),
//   time: Joi.string(),
//   value: Joi.number(),
// });
