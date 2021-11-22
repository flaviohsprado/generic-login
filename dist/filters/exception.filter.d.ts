import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
export declare class AllExceptionsFilter extends BaseExceptionFilter {
    private readonly logger;
    constructor();
    catch(exception: any, host: ArgumentsHost): void;
}
