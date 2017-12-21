/*export class Exercise{
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

export class ExList {
    eList: string[] = [];
}

export class NutritionTracker{

    constructor(f:string, c:number){
        this.food = f;
        this.calorie = c;
    }
    food: string;
    calorie: number;
} */

export class Exercise {
    text: string;
    calories: number;
    user: string;
}

export class User {
    id: number;
    name: string = "lee";
    exercises: Exercise[] = [];
    completed: Exercise[] = [];
    


  
    

}

export class Room {
    users: User[] = [new User(), new User()];
    exercises: Exercise[] = [];
    

    

}
