import { Response } from 'express';
interface ErrorProps {
    statusCode: number;
    message: string;
    validationError: any;
    code: string;
    meta: {
        target: string[];
    };
}
declare const handleError: (error: ErrorProps, res: Response) => {
    message: string;
    statusCode: number;
    status: string;
};
export default handleError;
