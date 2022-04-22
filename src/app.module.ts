import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsService } from './tuits/tuits.service';
import { TuitsController } from './tuits/tuits.controller';

@Module({
  imports: [],
  controllers: [AppController, TuitsController],
  providers: [AppService, TuitsService],
})
export class AppModule {}
