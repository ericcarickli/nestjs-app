import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImplementEntity } from './implement.entity';
import { Repository } from 'typeorm';
import { ImplementDTO } from './dto/implement.dto';

@Injectable()
export class ImplementService {
    constructor(
        @InjectRepository(ImplementEntity)
        private readonly implementRespository: Repository<ImplementEntity>
    ) {}

    async save(data: ImplementDTO): Promise<ImplementEntity> {
        const implement = this.implementRespository.create(data);
        return await this.implementRespository.save(implement);
    }
}
