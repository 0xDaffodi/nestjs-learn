import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ReadJsonService } from "src/read_json/read-json";

@Injectable()
export class ContentService {
    constructor(
        private readonly readJsonService: ReadJsonService,
    ) {
        // MENTION: when start this program, run this task first.
        // readJsonService.getLatestLearniverseText();        
    }

    async getAllContent() {
        if (this.readJsonService.content.length <= 0) {
            throw new HttpException('Sync git error', HttpStatus.BAD_GATEWAY);
        }

        return {
            content: this.readJsonService.content
        }
    }


}