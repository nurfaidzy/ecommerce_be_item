import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiResponse } from 'src/interfaces/response.interface';

export function respond<T>({
  status,
  data,
  message,
  statusCode = HttpStatus.BAD_REQUEST,
}: ApiResponse<T>): ApiResponse<T> {
  const responsePayload: Omit<ApiResponse<T>, 'statusCode'> = { status };

  if (data !== undefined) responsePayload.data = data;
  if (message !== undefined) responsePayload.message = message;

  if (status) {
    return responsePayload as ApiResponse<T>;
  }

  throw new HttpException(responsePayload, statusCode);
}

export function success<T>(
  data: T,
  statusCode = HttpStatus.OK,
): ApiResponse<T> {
  return respond({ status: true, data, statusCode });
}

export function fail(
  message: string,
  statusCode = HttpStatus.BAD_REQUEST,
): ApiResponse<null> {
  return respond({ status: false, message, statusCode });
}

export function error(
  err: Error,
  statusCode = HttpStatus.INTERNAL_SERVER_ERROR,
): ApiResponse<null> {
  return respond({ status: false, message: err.message, statusCode });
}
