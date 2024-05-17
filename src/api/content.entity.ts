import { Question } from "./questions.entity";

export class Chapter {
    name: string;
    index_hidden: number;
    summary: string;
    text: string;
    question: Question[];
}

export class Level {
    name: string;
    index: number;
    chapters: Chapter[];
    question: Question[];
}

export class Stage {
    name: string;
    index: number;
    levels: Level[];
    question: Question[];
}