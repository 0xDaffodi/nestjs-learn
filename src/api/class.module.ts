import { Module } from "@nestjs/common";
import { ClassController } from "./class.controller";
import { ClassService } from "./class.service";
import { ReadJsonService } from "src/read_json/read-json";

// MENTION: if you want module globally, can use the @Global decorator. Buy you should be careful about use this...
@Module({
    controllers: [ClassController],
    providers: [ClassService, ReadJsonService],
})
export class ClassModule {}