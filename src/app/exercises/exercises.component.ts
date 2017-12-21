import { Component, OnInit} from '@angular/core';
import { Exercise, Room, User} from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';

import { Router } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {

  room = new Room();
  me: User;

  constructor(private exercise: ExerciseService, private http: Http,  private router: Router) { }

  ngOnInit() {
    if(this.exercise.me == null){
      
      this.router.navigate(['/login']);
    }
    this.me = this.exercise.me;
    setInterval(()=> this.update(), 1000)
  }

  update(){
    this.http.get(this.exercise.apiRoot + "/exercise/room").subscribe( data => {
        this.room = data.json();
   
    });

  }

  submitExercise(e: MouseEvent, exercise: Exercise, i: number,calories?: number){
    e.preventDefault();
  console.log(calories);
  exercise.calories = calories;
    const data = { text: exercise.text, user: this.me.name, cals: calories };
    console.log("test below");
    console.log(this.me.name);
    
    this.http.post(this.exercise.apiRoot + "/exercise/room/exercises", data).subscribe(res=>{
    console.log("posted");
      this.me.completed.push(exercise);
    })
    
  }
  
 /* 
  add(e:MouseEvent, i: number){

    console.log(this.exName);
  this.exercise.add(this.exName);
    
    
 --------- this works!! but does not update the view ----------
    this.exercise.add(this.exName);
*/
/* --------- this works!! but does not hold data when page is refreshed ----------
    this.temp.push(this.exName);

    
    console.log("update"); 
    /*
    const data = { text: this.exName };
    this.http.post(this.exercise.apiRoot + "/exercise/exercise/exercise_json", data).subscribe(res=>{
      this.exercise.exList.eList.splice(i, 1);
      this.exercise.exList.eList.push( res.json() );            
    });

    this.http.get(this.exercise.apiRoot + "/exercise/exercise").subscribe( data =>{
      this.list = data.json();
    });
    this.check2.detectChanges();
        console.log("check works");
        */
    
  }

