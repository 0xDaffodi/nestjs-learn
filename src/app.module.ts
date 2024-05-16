import { Module } from '@nestjs/common';
// MENTION: run dotnev files and read server/database user and password and so on...
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassController } from './api/class.controller';
import { ClassService } from './api/class.service';
import { ClassModule } from './api/class.module';
// MENTION: open 'cron' schedule module!
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [
    // TODO: fix dotnev...
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   load: [configuration],
    // }),
    ScheduleModule.forRoot(),
    ClassModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// TODO: 1. read all docs 'QUICKLY'.✅
      // 2. make this program running on server and successful run by pm2.✅
      // 3. make a cloud sheet and read by this service
        // a. sheet format
        /*
        ===========================================================
        Stage: {
          name: "",
          index: 1,
          Levels: {
            name: "Gateway to WEB3.0",
            index: 1,
            Chapters: {
              name: "What is Bitcoin?",
              index: 1,
              summary: "Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous."
            }
          }

        }
        ===========================================================
        */
      // 4. make server can git pull and restart ✅
      // 5. make apis, frontend WITH backend
      // 6. change ip url to customize url
      // 7. connect to database
      // 8. make a account system, save datas on SQL

// MENTION: 