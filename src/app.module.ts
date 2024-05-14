import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassController } from './api/class.controller';

@Module({
  imports: [],
  controllers: [AppController, ClassController],
  providers: [AppService],
})
export class AppModule {}
