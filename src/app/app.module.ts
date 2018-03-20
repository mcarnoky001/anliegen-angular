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

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'subtasks', component: SubtasksComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'newtask', component: NewTaskComponent },
  { path: 'selectedtask', component: SelectedTaskComponent },
];

@NgModule({
  imports:      [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      ),
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],
  declarations: [ AppComponent, TasksComponent, MainContentComponent, NewTaskComponent, SubtasksComponent, SkillsComponent, SelectedTaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
