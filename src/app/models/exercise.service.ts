import { Injectable } from '@angular/core';
import { ExList } from './exercise';
import { Http } from '@angular/http';

@Injectable()
export class ExerciseService {

  exercises: string;

  constructor(private ExList: ExList) { }

  add(ex: string){
    this.exercises = ex;
    console.log(this.exercises);
    

    this.ExList.eList.push(this.exercises);
    console.log(this.ExList.eList);

  }

}
