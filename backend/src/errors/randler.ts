import { ErrorRequestHandler, response } from 'express';
 
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.log(error);

  return response.status(500).json({ error: 'Internal server error' });
};

export default errorHandler;