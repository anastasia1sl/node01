import MovieCollection from '../db/models/movie.js';

export const getAllMovies = () => MovieCollection.find();

export const getMovieById = (id) => MovieCollection.findById(id);

export const createMovie = (payload) => MovieCollection.create(payload);

export const updateMovie = async (filter, data, options = {}) => {
  const rawResult = await MovieCollection.findOneAndUpdate(filter, data, {
    new: true, //// this code is used because findOneAndUpdate method does not return the updated data in postman correctly
    includeResultMetadata: true, /// used
    ...options,
  });

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject?.upserted),
  };
};

export const deleteMovie = (filter) => MovieCollection.findOneAndDelete(filter);
