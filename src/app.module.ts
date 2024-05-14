import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassController } from './api/class.controller';
import { ClassService } from './api/class.service';
import { ClassModule } from './api/class.module';

@Module({
  imports: [ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
