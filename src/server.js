import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from './utils/env.js';
import moviesRouter from './routers/movies.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

export const startServer = () => {
  const app = express(); // we create a web server

  // const logger = pino({
  //
  //   transport: {
  //     target: 'pino-pretty',
  //   },
  // });

  // app.use(logger); //// use pino as a logger library to see logs in terminal
  app.use(cors());
  app.use(express.json());

  app.use('/movies', moviesRouter); /// all requests for /movies

  app.use(notFoundHandler); // middleware for non existing routes

  app.use(errorHandler); // middleware for server errors

  app.listen(PORT, () => console.log('Server is running at port 3000')); // we run web server
};
