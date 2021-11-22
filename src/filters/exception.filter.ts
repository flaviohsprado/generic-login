import { Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private readonly logger: Logger;

  constructor() {
    super();

    this.logger = new Logger('AllExceptionsFilter');
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    this.logger.error(exception);

    let status = exception.status ? exception.status : exception.statusCode;

    const message =
      exception instanceof Error ? exception.message : exception.message.error;

    response.status(status).json({
      status,
      success: false,
      error: message,
      message:
        status === HttpStatus.INTERNAL_SERVER_ERROR
          ? 'Sorry we are experiencing technical problems.'
          : '',
    });
  }
}
