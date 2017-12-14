import { Injectable } from '@angular/core';
import { ExList } from './exercise';
import { Http } from '@angular/http';

@Injectable()
export class ExerciseService {
  apiRoot: string;
  exercises: string;
  /*list: string[] = [];*/

  constructor(public exList: ExList) { }

  add(ex: string){
    this.exercises = ex;
    console.log(this.exercises);
    

    this.exList.eList.push(this.exercises);
    console.log(this.exList.eList);
    /*this.list.push(ex);*/


  }

}
