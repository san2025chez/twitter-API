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
import { throttleTime } from 'rxjs';
import { Tuits } from './tuits.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {

    constructor(private readonly tuitsService:TuitsService) {
        
    } 

  @Get()
  gettwits(@Query() filterQuery): Tuits[] {
    return this.tuitsService.getTuits();
  }

  @Get('/:id')
  getforid(@Param('id') id: string):Tuits {
    return this.tuitsService.getTuit(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message: string) :void{
    return this.tuitsService.createTuit(message)
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() tuit):Tuits {
    return this.updateTuit(id,tuit)
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: string) :void{
    return this.tuitsService.removeTuit(id);
  }
}
