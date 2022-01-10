export default class StandardError extends Error {
    private statusCode;
    constructor(statusCode: number, message: string);
}
