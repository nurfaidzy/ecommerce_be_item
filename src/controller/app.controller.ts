import { Controller, Get } from '@nestjs/common';
import { AppService } from './../services/app.service';
import { success } from '../util/response';
import { ApiResponse } from '../interfaces/response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // test connection
  @Get('/ping')
  getConnection(): ApiResponse<string> {
    return success('pong');
  }
}
