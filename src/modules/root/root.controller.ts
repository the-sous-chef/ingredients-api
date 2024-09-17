import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class RootController {
    constructor() {}

    @Get()
    livecheck(): string {
        return 'OK';
    }
}
