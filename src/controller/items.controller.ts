import { Body, Controller, Post } from '@nestjs/common';
import { success } from '../util/response';
import { ApiResponse } from '../interfaces/response.interface';
import { ItemService } from 'src/services/items.service';
import { CategoryRequestValidation } from 'src/validations/category.validation';

@Controller('/v1/items')
export class ItemsController {
  constructor(private readonly itemService: ItemService) {}

  // test connection
  @Post('/create/category')
  createCategory(
    @Body() payload: CategoryRequestValidation,
  ): ApiResponse<string> {
    try {
      console.log('Payload:', payload);
      const data = 'success';

      return success(data);
    } catch (error) {
      return fail(error);
    }
  }
}
