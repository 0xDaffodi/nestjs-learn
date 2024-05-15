import { Module } from '@nestjs/common';
// MENTION: run dotnev files and read server/database user and password and so on...
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassController } from './api/class.controller';
import { ClassService } from './api/class.service';
import { ClassModule } from './api/class.module';

@Module({
  imports: [
    // TODO: fix dotnev...
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   load: [configuration],
    // }),
    ClassModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// TODO: 1. read all docs 'QUICKLY'.✅
      // 2. make this program running on server and successful run by pm2
      // 3. make a cloud sheet and read by this service
      // 4. make apis, frontend WITH backend
      // 5. change ip url to customize url
      // 6. connect to database
      // 7. make a account system, save datas on SQL

// MENTION: 