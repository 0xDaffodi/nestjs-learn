import { Module } from '@nestjs/common';
// MENTION: run dotnev files and read server/database user and password and so on...
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './api/content.module';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    ContentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}