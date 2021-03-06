import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlanComponent } from './plan/plan.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseService } from './models/exercise.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    PlanComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "plan", component: PlanComponent },
      { path: "exercise", component: ExercisesComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
  ])
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
