import Joi from 'joi';
import { genreList, releaseYear } from '../constants/movies.js';

export const movieAddSchema = Joi.object({
  name: Joi.string().required(),
  rating: Joi.number().required(),
  year: Joi.string().pattern(releaseYear).required(),
  genre: Joi.string()
    .valid(...genreList)
    .required(),
});

export const moviePatchSchema = Joi.object({
  name: Joi.string(),
  rating: Joi.number(),
  year: Joi.string().pattern(releaseYear),
  genre: Joi.string().valid(...genreList),
});
