/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from 'class-validator';

export class CategoryRequestValidation {
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;
}
