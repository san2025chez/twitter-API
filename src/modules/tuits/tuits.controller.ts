import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
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
    console.log("igreso");
    
    return this.tuitsService.getTuits();
  }

  @Get('/:id')
  getforid(@Param('id') id: string):Tuits {
    const tuit= this.tuitsService.getTuit(id);
    if (!tuit) {

      throw new NotFoundException('Resource not found');
    }
    return tuit;
  }

  @Post()
 /*  @HttpCode(HttpStatus.NO_CONTENT) */
  createTuit(@Body() message: CreateTuitDto) :void{
    console.log("ingreso a crear");
    
    console.log(message instanceof CreateTuitDto);
    
    return this.tuitsService.createTuit(message)
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() tuit: UpdateTuitDto):Tuits {
    return this.updateTuit(id,tuit)
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: string) :void{
    return this.tuitsService.removeTuit(id);
  }
}
