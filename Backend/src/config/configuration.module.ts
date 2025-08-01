import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from './index';
import { validationSchema } from './validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true, // Makes ConfigService available globally
      envFilePath: '.env',
      validationSchema,
    }),
  ],
})
export class ConfigurationModule {}