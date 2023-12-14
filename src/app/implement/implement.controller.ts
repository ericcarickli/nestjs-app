import { Body, Controller, Post } from '@nestjs/common';
import { ImplementService } from './implement.service';
import { ImplementDTO } from './dto/implement.dto';

@Controller('api/v1/implement')
export class ImplementController {
    constructor( protected readonly implementService: ImplementService ) {}

    @Post()
    async save( @Body() body: ImplementDTO ) {
        this.implementService.save(body);
    }
}
