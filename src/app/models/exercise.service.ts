import { Injectable } from '@angular/core';
import { ExList } from './exercise';
import { Http } from '@angular/http';

@Injectable()
export class ExerciseService {
  apiRoot: string = "//localhost:4200";
  exercises: string;

  constructor(public exList: ExList) { }

  add(ex: string){
    this.exercises = ex;
    console.log(this.exercises);
    

    this.exList.eList.push(this.exercises);
    console.log(this.exList.eList);

  }

}
