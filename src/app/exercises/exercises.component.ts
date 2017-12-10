import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Exercise, ExList } from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExercisesComponent implements OnInit {

  apiRoot = "//localhost:4200"
  list = new ExList();
  exName: string;
  constructor(private exercise: ExerciseService) { }

  ngOnInit() {
    $.getJSON(this.apiRoot + "/Exercise/ExList").done( data =>{
      this.list.eList = data;
  })
  }

  add(ex:string){
    this.exName = ex;
    this.exercise.add(this.exName);
  }

}
       