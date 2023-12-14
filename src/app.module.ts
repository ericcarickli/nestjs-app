import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImplementModule } from './app/implement/implement.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'nestjsapp',
    synchronize: true, // syncs the database with entities on every start ## TODO: remove on production
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  }), ImplementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
