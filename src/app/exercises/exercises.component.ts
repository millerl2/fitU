import { Component, OnInit} from '@angular/core';
import { Exercise, ExList } from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';

import { ApplicationRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { Http } from "@angular/http";
@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {

  list = new ExList();
  temp: string[] = [];
  exName: string;
  constructor(private exercise: ExerciseService, private http: Http, private check: ApplicationRef, private check2:ChangeDetectorRef) { }

  ngOnInit() {
  }
  update(){
    
}

  add(e:MouseEvent, i: number){
    console.log(this.exName);
    this.exercise.add(this.exName);
    this.temp.push(this.exName);
    
/* --------- this works!! but does not hold data when page is refreshed ----------
    this.exercise.add(this.exName);*/

    this.update();e.preventDefault(); 
    
    const data = { text: this.exName };
    this.http.post(this.exercise.apiRoot + "/exercise/ExList/", data).subscribe(res=>{
      this.exercise.exList.eList.splice(i, 1);
      this.exercise.exList.eList.push( res.json() );            
    });

    this.http.get(this.exercise.apiRoot + "/exercise/ExList").subscribe( data =>{
      this.list = data.json();
    });
    this.check2.detectChanges();
        console.log("check works");
  }
}
