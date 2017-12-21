import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*import { NutritionTracker } from '../models/exercise';*/

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlanComponent implements OnInit {

  /*track: NutritionTracker[] = [];
  tempTrack: NutritionTracker;
  foodItem: string;
  cal: number;*/

  constructor() { }

  ngOnInit() {
  }
/*
  add(){
    this.tempTrack.food = this.foodItem;
    this.tempTrack.calorie = this.cal;

    this.track.push(this.tempTrack);
  }
*/
}
