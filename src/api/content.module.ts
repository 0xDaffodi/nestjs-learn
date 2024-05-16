import { Module } from "@nestjs/common";
import { ContentController } from "./content.controller";
import { ContentService } from "./content.service";
import { ReadJsonService } from "src/read_json/read-json";

// MENTION: if you want module globally, can use the @Global decorator. Buy you should be careful about use this...
@Module({
    controllers: [ContentController],
    providers: [ContentService, ReadJsonService],
})
export class ContentModule {}