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
// TODO: 1. read all docs 'QUICKLY'.✅
      // 2. make this program running on server and successful run by pm2.✅
      // 3. make a cloud sheet and read by this service ✅
      // 4. make server can git pull and restart ✅
      // 5. make apis, frontend WITH backend
      // 6. change ip url to customize url
      // 7. connect to database
      // 8. make a account system, save datas on SQL