import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./exercise";
import { Http } from "@angular/http";

declare var window: any;
declare var FB: any;

@Injectable()
export class ExerciseService {
  apiRoot = '//localhost:3000' 
  me: User;

  ngOnInit(){}

  constructor(private http: Http, private router: Router) {}

  login(name: string, password: string, fbid?: string, picture?: string){
    console.log(name + " " + password + " " + fbid + " " + picture)
    this.http.post(this.apiRoot + "/exercise/room/users", { name, password, fbid, picture }).subscribe(
        data => {
            this.me = data.json();
            this.http.get(this.apiRoot + "/exercise/exercises").subscribe( data =>{
                this.me.exercises = data.json();
                this.me.completed = [];
            });
            this.router.navigate(['/exercise']);
        },
        err => {
            console.log(err);
        },
        () => {}
    )
    
}

}
