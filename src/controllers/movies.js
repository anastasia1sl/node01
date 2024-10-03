import * as movieServices from '../services/movies.js';
import createHttpError from 'http-errors';

export const getAllMoviesController = async (req, res) => {
  const data = await movieServices.getAllMovies(); //// Ми прибрали TRY CATCH конструкцію, uses ctrlWrapper instead

  res.json({
    status: 200,
    message: 'Successfully found movies',
    data,
  });
};

export const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await movieServices.getMovieById(id); //// Ми прибрали TRY CATCH конструкцію, uses ctrlWrapper instead

  if (!data) {
    throw createHttpError(404, `Movie with id ${id} not found`);
  }

  res.json({
    status: 200,
    message: `Movie with ${id} successfuly found`,
    data,
  });
};

export const addMovieController = async (req, res) => {
  const data = await movieServices.createMovie(req.body);

  res.status(201).json({
    status: 201,
    message: 'Movie has been added successfully',
    data,
  });
};

export const upsertMovieController = async (req, res) => {
  //// upsert is used because it can update or add a movie if such data is not found
  console.log(req.body); // це тіло запиту
  console.log('req.params', req.params); /// це id запиту тут

  const { id } = req.params;
  const { isNew, data } = await movieServices.updateMovie(
    ///isNew - checking if it is a new object or just updated
    { _id: id },
    req.body,
    {
      upsert: true, //// upsert: true, used to add new movie in case no movie is found with the ID while updating it
    },
  );

  const status = isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Movie has been upserted succeessfully',
    data,
  });
};

export const patchMovieController = async (req, res) => {
  //// this can only update existing object, otherwise throw error
  const { id } = req.params;
  const result = await movieServices.updateMovie({ _id: id }, req.body);

  if (!result) {
    throw createHttpError(404, `Movie with id=${id} not found`);
  }

  res.json({
    status: 200,
    message: 'Movie has been patched successfully',
    data: result.data,
  });
};

export const deleteMovieController = async (req, res) => {
  const { id } = req.params;
  const data = await movieServices.deleteMovie({ _id: id });

  if (!data) {
    throw createHttpError(404, `Movie with id=${id} not found`);
  }

  res.status(204).json({
    message: 'Movie has been successfully deleted', // won't be any code in postman, its ok
  });
};
