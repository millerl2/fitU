import { Injectable } from '@angular/core';
import { ExList } from './exercise';
import { Http } from '@angular/http';

@Injectable()
export class ExerciseService {

  exercises: string;
  count: number = 0;

  constructor(private ExList: ExList) { }

  add(ex: string){
    this.exercises = ex;
    

    this.ExList.eList2[this.count] = this.exercises;
    this.count++;

  }

}
