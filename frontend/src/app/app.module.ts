import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './administration/tasks/tasks.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NewTaskComponent } from './administration/tasks/new-task/new-task.component';
import { SubtasksComponent } from './administration/subtasks/subtasks.component';
import { SkillsComponent } from './administration/skills/skills.component';
import { SelectedTaskComponent } from './administration/selected-task/selected-task.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './authentication/login/login.component';
import { MainMenuComponent } from './main-content/main-menu/main-menu.component';
import { FinalizedTasksClearkComponent } from './finalized-tasks-cleark/finalized-tasks-cleark.component';
import { SubtaskTableComponent } from './subtask-table/subtask-table.component';
import { CurrentTaskClearkComponent } from './current-task-cleark/current-task-cleark.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: SelectedTaskComponent  },
  { path: 'home', component: SelectedTaskComponent  },
  { path: 'tasks', component: TasksComponent  },
  { path: 'subtasks', component: SubtasksComponent  },
  { path: 'skills', component: SkillsComponent  },
  { path: 'newtask', component: NewTaskComponent  },
  { path: 'selectedtask', component: SelectedTaskComponent  },
  { path: 'finalizedtaskscleark', component: FinalizedTasksClearkComponent  },
  { path: 'currenttaskcleark', component: CurrentTaskClearkComponent  }
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
    FinalizedTasksClearkComponent,
    SubtaskTableComponent,
    CurrentTaskClearkComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard, AuthService]
})
export class AppModule { }
