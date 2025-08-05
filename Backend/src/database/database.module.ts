import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from "@nestjs/config";
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'postgres',
                host: config.get('DB_HOST'),
                port: parseInt(config.get('DB_PORT') || '5432'),
                username: config.get('DB_USERNAME'),
                password: config.get('DB_PASSWORD'),
                database: config.get('DB_NAME'),
                autoLoadEntities: true,
                synchronize: true, // Set to false in production
                autoCreateDatabase: true, // Automatically create the database if it doesn't exist
            })
        }),
    ],
    controllers: [],
    providers: [],
    exports: [],
    // Add any database-specific providers or configurations here

})
export class DatabaseModule { }