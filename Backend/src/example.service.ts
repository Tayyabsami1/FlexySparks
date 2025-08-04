import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ExampleService {
  constructor(private configService: ConfigService) {}

  getAppInfo() {
    // Method 1: Using the registered config namespace
    const appName = this.configService.get<string>('app.name');
    const appPort = this.configService.get<number>('app.port');
    const nodeEnv = this.configService.get<string>('app.nodeEnv');

    // Method 2: Using direct environment variable access
    const dbHost = this.configService.get<string>('database.host');
    const dbPort = this.configService.get<number>('database.port');

    // Method 3: Using get with fallback values
    const jwtSecret = this.configService.get<string>('jwt.secret', 'fallback-secret');

    return {
      application: {
        name: appName,
        port: appPort,
        environment: nodeEnv,
      },
      database: {
        host: dbHost,
        port: dbPort,
      },
      security: {
        hasJwtSecret: !!jwtSecret,
      },
    };
  }

  getDatabaseConfig() {
    return {
      type: this.configService.get<string>('database.type'),
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
    };
  }

  getJwtConfig() {
    return {
      secret: this.configService.get<string>('jwt.secret'),
      expiresIn: this.configService.get<string>('jwt.expiresIn'),
    };
  }
}