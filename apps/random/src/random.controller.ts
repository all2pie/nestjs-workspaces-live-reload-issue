import { Controller, Get } from '@nestjs/common';
import { RandomService } from './random.service';

@Controller()
export class RandomController {
  constructor(private readonly randomService: RandomService) {}

  @Get()
  getHello(): string {
    return this.randomService.getHello();
  }
}
