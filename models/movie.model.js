import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
    },
    genre: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
