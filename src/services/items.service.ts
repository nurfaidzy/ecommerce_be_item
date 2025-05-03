import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  createCategory(): string {
    return 'Hello World!';
  }
}
