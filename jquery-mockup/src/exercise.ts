import * as $ from 'jquery';

export class Exercise{
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

export class ExList {
    eList: Exercise[] = [
        { name: "Pilates" },
        { name: "Running" },
        { name: "Swimming"},
        { name: "Yoga"}
    ];

    myExercises: Exercise[] = [];

    drawExercises() {
        $("#exercise-list").html(
            this.eList.map(x => `<button class="list-group-item" id="cmd-add">${x.name}</button>`).join("")
        );
    }

    drawCompletedExercises() {
        $("#completed-exercises").html(
            this.myExercises.map(x=> `<li class="list-group-item">${x.name}</li>`).join("")
        );
    }
}


// Controller
const list = new ExList();
let empty:boolean = true;

list.drawExercises();

$('.list-group-item').click(function(e) {
    e.preventDefault();
    const workoutName = e.target.textContent;
    if(empty) {
        document.getElementById('default-message').remove();
        empty = false;
    }
    const newExercise = new Exercise(workoutName);
    list.myExercises.push(newExercise);
    console.log(list.myExercises);
    list.drawCompletedExercises();
});