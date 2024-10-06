import MovieCollection from '../db/models/movie.js';

export const getAllMovies = () => MovieCollection.find();

export const getMovieById = (id) => MovieCollection.findById(id);

export const createMovie = (payload) => MovieCollection.create(payload);

export const updateMovie = async (filter, data, options = {}) => {
  const rawResult = await MovieCollection.findOneAndUpdate(filter, data, {
    new: true, //// this code is used because findOneAndUpdate method does not return the updated data in postman correctly, this code returns new object value
    includeResultMetadata: true, /// used
    runValidators: true, /// for mongoose to do the validation when updating data
    ...options,
  });

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject?.upserted),
  };
};

export const deleteMovie = (filter) => MovieCollection.findOneAndDelete(filter);
