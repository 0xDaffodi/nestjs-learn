import { Module } from "@nestjs/common";
import { ClassController } from "./class.controller";
import { ClassService } from "./class.service";

// MENTION: if you want module globally, can use the @Global decorator. Buy you should be careful about use this...
@Module({
    controllers: [ClassController],
    providers: [ClassService],
})
export class ClassModule {}