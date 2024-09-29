import * as movieServices from '../services/movies.js';
import createHttpError from 'http-errors';

export const getAllMoviesController = async (req, res) => {
  const data = await movieServices.getAllMovies(); //// Ми прибрали TRY CATCH конструкцію

  res.json({
    status: 200,
    message: 'Successfully found movies',
    data,
  });
};

export const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await movieServices.getMovieById(id); //// Ми прибрали TRY CATCH конструкцію

  if (!data) {
    throw createHttpError(404, `Movie with id ${id} not found`);
  }

  res.json({
    status: 200,
    message: `Movie with ${id} successfuly found`,
    data,
  });
};
