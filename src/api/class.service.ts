import { Injectable } from "@nestjs/common";
import { ClassMember } from "./class.interface";

@Injectable()
export class ClassService {
    private readonly classMembers: ClassMember[] = [];

    async getClassInfo() {
        return this.classMembers;
    }

    async addClassMember(newMember: ClassMember) {
        this.classMembers.push(newMember);
    }
}