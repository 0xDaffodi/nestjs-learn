import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from '@nestjs/schedule';
import { simpleGit } from 'simple-git';
import * as fs from 'fs';
import { Stage } from "src/api/content.entity";

@Injectable()
export class ReadJsonService {
    public content: Stage[] = [];
    
    // MENTION: can use the CronExpression package to use the general cron format by nestjs
    // MENTION: also, you can use @Interval to make a repeated task
    // MENTION: automatic get the latest json file and git
    @Cron(CronExpression.EVERY_HOUR, {
        name: 'getLatestLearniverseText'
        // timeZone: 'Asia/Shanghai'
    })
    async getLatestLearniverseText() {
        const path = 'src/clone/learniverse-text';
        const git = simpleGit('src/clone');
        // if in clone folder, there is no files, then clone this repo; if already have files, pull this repo.
        try {
            if (!fs.existsSync(path)) {
                await git.clone('https://github.com/0xDaffodi/learniverse-text');
            } else {
                const repo = git.cwd(path);
                await repo.pull();
            }
        } catch (err) {
            console.error('Failed to get latest learniverse-text:', err);
        }
        // read json from local git repo
        // TODO: 做一个防止git出错的机制，如果git这次抓取没有抓到东西。不能在覆盖content了，需要沿用之前抓好的content
        const stagesPath = 'src/clone/learniverse-text/stages.json';
        const stagesData = JSON.parse(fs.readFileSync(stagesPath, 'utf8'));
        // MENTION: use 'map' to simplify the code.
        this.content = stagesData.stages.map((stage, i) => {
            const levels = stage.levels.map((level, p) => {
                const chapters = level.chapters.map((chapter, n) => {
                    const thisChaperPath = `src/clone/learniverse-text/stage${i + 1}/level${level.index}/chapter${n + 1}`;
                    const thisChapterData = fs.readFileSync(thisChaperPath, 'utf8');
                    return {
                        name: chapter.name,
                        index_hidden: chapter.index_hidden,
                        summary: chapter.summary,
                        text: thisChapterData
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
    }
}