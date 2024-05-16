import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ClassMember } from "./class.interface";
import { ReadJsonService } from "src/read_json/read-json";

@Injectable()
export class ClassService {
    private readonly classMembers: ClassMember[] = [];

    constructor(
        private readonly readJsonService: ReadJsonService,
    ) {
        // MENTION: when start this program, run this task first.
        readJsonService.getLatestLearniverseText();        
    }

    async getClassInfo() {
        if (this.classMembers.length === 0) {
            throw new HttpException('There are no members in this class.', HttpStatus.BAD_REQUEST);
        } else {
            return this.classMembers;
        }
    }

    async addClassMember(newMember: ClassMember) {
        this.classMembers.push(newMember);
    }
}