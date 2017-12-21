import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseService } from '../models/exercise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  constructor(private router: Router, private exercise: ExerciseService) { }

  ngOnInit() {
  }

  login(){
    this.exercise.login(this.name, this.password);
    
  }

}
