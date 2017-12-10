export class Exercise{
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

export class ExList {
    eList2: string[] = ["running","swimming","pilates"];
    eList: Exercise[] = [
        { name: "Pilates" },
        { name: "Running" },
        { name: "Swimming"},
        { name: "Yoga"}
    ]
}