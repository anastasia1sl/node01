import { Schema, model } from 'mongoose';

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
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      enum: ['love story', 'horror', 'thriller', 'adventure', 'drama'],
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const MovieCollection = model('movie', movieSchema);

export default MovieCollection;
