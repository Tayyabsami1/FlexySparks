import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get('config')
  getConfig() {
    return this.exampleService.getAppInfo();
  }

  @Get('database-config')
  getDatabaseConfig() {
    return this.exampleService.getDatabaseConfig();
  }

  @Get('jwt-config')
  getJwtConfig() {
    return this.exampleService.getJwtConfig();
  }
}
