import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SubtasksComponent } from './subtasks/subtasks.component';
import { SkillsComponent } from './skills/skills.component';
import { SelectedTaskComponent } from './selected-task/selected-task.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FinalizedTasksClearkComponent } from './finalized-tasks-cleark/finalized-tasks-cleark.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: SelectedTaskComponent, canActivate: [AuthGuard] },
  { path: 'home', component: SelectedTaskComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'subtasks', component: SubtasksComponent, canActivate: [AuthGuard] },
  { path: 'skills', component: SkillsComponent, canActivate: [AuthGuard] },
  { path: 'newtask', component: NewTaskComponent, canActivate: [AuthGuard] },
  { path: 'selectedtask', component: SelectedTaskComponent, canActivate: [AuthGuard] },
  { path: 'finalizedtaskscleark', component: FinalizedTasksClearkComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports:      [
      RouterModule.forRoot(
        appRoutes,
        // { enableTracing: true } // <-- debugging purposes only
      ),
      BrowserModule,
      FormsModule,
      HttpClientModule,
    ],
  declarations: [
    AppComponent,
    TasksComponent,
    MainContentComponent,
    NewTaskComponent,
    SubtasksComponent,
    SkillsComponent,
    SelectedTaskComponent,
    LoginComponent,
    MainMenuComponent,
    FinalizedTasksClearkComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard, AuthService]
})
export class AppModule { }
