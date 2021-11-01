interface ErrorProps {
    statusCode: number;
    message: string;
    validationError: any;
    code: string;
    meta: {
        target: string[];
    };
}
