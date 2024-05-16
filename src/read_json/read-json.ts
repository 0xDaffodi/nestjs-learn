import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from '@nestjs/schedule';
import simplegit from 'simple-git';
import * as fs from 'fs';
import { Stage, Level, Chapter } from "src/api/content.entity";

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
        const path = './clone/learniverse-text';
        const git = simplegit('./clone');
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
        const stagesPath = './clone/learniverse-text/stages.json';
        const stagesData = JSON.parse(fs.readFileSync(stagesPath, 'utf8'));
        // MENTION: use 'map' to simplify the code.
        this.content = stagesData.stages.map((stage, i) => {
            const levels = stage.levels.map((level, p) => {
                const chapters = level.chapters.map((chapter, n) => {
                    const thisChaperPath = `./clone/learniverse-text/stage${i + 1}/level${level.index}/chapter${n + 1}`;
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
        // for (let i = 0; i < stagesData.stages.length; i++) {
        //     let thisStage: Stage = {
        //         name: "",
        //         index: 0,
        //         levels: []
        //     };
        //     thisStage.name = stagesData.stages[i].name;
        //     thisStage.index = stagesData.stages[i].index;
        //     for (let p = 0; p < stagesData.stages[i].levels.length; p++) {
        //         let thisLevel: Level = {
        //             name: "",
        //             index: 0,
        //             chapters: []
        //         };
        //         thisLevel.name = stagesData.stages[i].levels[p].name;
        //         thisLevel.index = stagesData.stages[i].levels[p].index;
        //         for (let n = 0; n < stagesData.stages[i].levels[p].chapters.length; n++) {
        //             let thisChapter: Chapter = {
        //                 name: "",
        //                 index_hidden: 0,
        //                 summary: "",
        //                 text: ""
        //             };
        //             thisChapter.name = stagesData.stages[i].levels[p].chapters[n].name;
        //             thisChapter.index_hidden = stagesData.stages[i].levels[p].chapters[n].index_hidden;
        //             thisChapter.summary = stagesData.stages[i].levels[p].chapters[n].summary;
        //             const thisChaperPath = `./clone/learniverse-text/stage${i+1}/level${thisLevel.index}/chapter${n+1}`;
        //             const thisChapterData = fs.readFileSync(thisChaperPath, 'utf8');
        //             thisChapter.text = thisChapterData;
        //             // push to []
        //             thisLevel.chapters.push(thisChapter);
        //         }
        //         // push to []
        //         thisStage.levels.push(thisLevel);
        //     }
        //     // push to []
        //     this.content.push(thisStage);
        // }
    }

}