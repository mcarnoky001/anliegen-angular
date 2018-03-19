import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'newtask', component: NewTaskComponent },
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
  declarations: [ AppComponent, TasksComponent, MainContentComponent, NewTaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
