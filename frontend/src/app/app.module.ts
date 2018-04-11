import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './administration/tasks/tasks.component';
import { NewTaskComponent } from './administration/tasks/new-task/new-task.component';
import { SubtasksComponent } from './administration/subtasks/subtasks.component';
import { SkillsComponent } from './administration/skills/skills.component';
import { SelectedTaskComponent } from './administration/selected-task/selected-task.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { HttpConnectionService } from './services/http-connection.service';


import { AuthenticationModule } from './authentication-module/authentication.module';
import { ClearkModule } from './cleark-module/cleark.module';
import { MessageModule } from './message/message.module';
import { ManagementModule } from './management/management.module';
import { SkillService } from './services/skill.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'cleark/currenttask', pathMatch: 'full'  },
  { path: 'tasks', component: TasksComponent },
  { path: 'subtasks', component: SubtasksComponent  },
  { path: 'skills', component: SkillsComponent },
  { path: 'newtask', component: NewTaskComponent },
  { path: 'selectedtask', component: SelectedTaskComponent }
];

@NgModule({
  imports:      [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AuthenticationModule,
      ClearkModule,
      MessageModule,
      ManagementModule
    ],
  declarations: [
    AppComponent,
    TasksComponent,
    NewTaskComponent,
    SubtasksComponent,
    SkillsComponent,
    SelectedTaskComponent,
    MainMenuComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [HttpConnectionService, SkillService]
})
export class AppModule { }
