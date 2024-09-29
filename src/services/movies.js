import MovieCollection from '../db/models/movie.js';

export const getAllMovies = () => MovieCollection.find();

export const getMovieById = (id) => MovieCollection.findById(id);
