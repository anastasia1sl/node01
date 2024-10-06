import { Schema, model } from 'mongoose';
import { genreList, releaseYear } from '../../constants/movies.js';

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      match: releaseYear,
      required: true,
    },
    genre: {
      type: String,
      enum: genreList,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const MovieCollection = model('movie', movieSchema);

export default MovieCollection;
