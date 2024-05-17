import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ReadJsonService } from "src/read_json/read-json";
import * as fs from 'fs';

@Injectable()
export class ContentService {
    constructor(
        private readonly readJsonService: ReadJsonService,
    ) {
        // MENTION: 启动程序的第一时刻，首先获取git上最新App文字素材
        readJsonService.getLatestLearniverseText();        
    }

    // 返回所有文本内容，供测试
    async getAllContent() {
        if (this.readJsonService.content.length <= 0) {
            throw new HttpException('Sync git error', HttpStatus.BAD_GATEWAY);
        }

        return {
            content: this.readJsonService.content
        }
    }

    // 返回Stage Menu
    async getContentMenu() {
        if (this.readJsonService.content.length <= 0) {
            throw new HttpException('Sync git error', HttpStatus.BAD_GATEWAY);
        }
        let thisContent = [];
        thisContent = this.readJsonService.content.map((stage, i) => {
            const levels = stage.levels.map((level, p) => {
                const chapters = level.chapters.map((chapter, n) => {
                    return {
                        name: chapter.name,
                        index_hidden: chapter.index_hidden,
                        summary: chapter.summary,
                    };
                });
                return {
                    name: level.name,
                    index: level.index,
                    chapters
                };
            });
            return {
                name: stage.name,
                index: stage.index,
                levels
            };
        });
        return {
            content: thisContent
        }
    }

}