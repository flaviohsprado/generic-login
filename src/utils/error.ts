import { NextFunction, Response } from 'express';

interface ErrorProps {
  statusCode: number;
  message: string;
  validationError: any;
  code: string;
  meta: { target: string[] };
}

const handleError = (error: ErrorProps, res: Response) => {
  const { statusCode, message } = error;

  return {
    message: message || 'Internal Server Error',
    statusCode: statusCode || 500,
    status: 'error',
  };
};

export default handleError;
