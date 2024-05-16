export class Chapter {
    name: string;
    index_hidden: number;
    summary: string;
    text: string;
}

export class Level {
    name: string;
    index: number;
    chapters: Chapter[];
}

export class Stage {
    name: string;
    index: number;
    levels: Level[];
}