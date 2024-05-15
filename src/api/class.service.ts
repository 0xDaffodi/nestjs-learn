import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ClassMember } from "./class.interface";

@Injectable()
export class ClassService {
    private readonly classMembers: ClassMember[] = [];

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