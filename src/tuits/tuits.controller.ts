import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {

    constructor(private readonly tuitsService:TuitsService) {
        
    } 

  @Get()
  gettwits(@Query() filterQuery): string {
    const { chani, oso } = filterQuery;
    return `the params is ${chani}  ${oso}`;
  }

  @Get('/:id')
  getforid(@Param('id') id: string) {
    return `el id ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message: string) {
    return `you twits is ${message}`;
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() tuit) {
    return `you twits is ${id} is update`;
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: string) {
    return `you twits is ${id} is deleted`;
  }
}
