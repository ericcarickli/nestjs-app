import { Module } from '@nestjs/common';
import { ImplementService } from './implement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImplementEntity } from './implement.entity';
import { ImplementController } from './implement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ImplementEntity])],
  providers: [ImplementService],
  controllers: [ImplementController]
})
export class ImplementModule {}
