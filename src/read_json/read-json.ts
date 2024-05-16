import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from '@nestjs/schedule';
import simplegit from 'simple-git';
import * as fs from 'fs';

@Injectable()
export class ReadJsonService {
    // TODO: Cron Task
    // TODO: Read Json
    // TODO: register in ClassModule
    // MENTION: can use the CronExpression package to use the general cron format by nestjs
    // MENTION: also, you can use @Interval to make a repeated task
    // MENTION: automatic get the latest json file and git
    @Cron(CronExpression.EVERY_10_MINUTES, {
        name: 'getLatestLearniverseText'
        // timeZone: 'Asia/Shanghai'
    })
    async getLatestLearniverseText() {
        const path = './clone/learniverse-text';
        const git = simplegit('./clone');
        // TODO: 如果temp下没有文件，则clone；如果已经有了，则git pull更新。
        try {
            // 检查 temp 目录是否存在 learniverse-text 仓库
            if (!fs.existsSync(path)) {
                // 如果不存在,则克隆仓库
                await git.clone('https://github.com/0xDaffodi/learniverse-text');
            } else {
                // 如果存在,则进入仓库目录并执行 git pull 更新
                const repo = git.cwd(path);
                await repo.pull();
            }
        } catch (err) {
            console.error('Failed to get latest learniverse-text:', err);
        }
        // read json from local git repo
        // const jsonData = JSON.parse(fs.readFileSync('./path/to/local/repo/file.json', 'utf8'));
    }

}