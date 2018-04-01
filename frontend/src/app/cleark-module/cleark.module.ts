import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FinalizedTasksClearkComponent } from './finalized-tasks-cleark/finalized-tasks-cleark.component';
import { CurrentTaskClearkComponent } from './current-task-cleark/current-task-cleark.component';
import { SubtaskTableComponent } from './subtask-table/subtask-table.component';

import { ClipboardModule } from 'ngx-clipboard';

const clearkRoutes: Routes = [
  {
    path: 'cleark',
    children: [
      { path: 'finalizedtasks', component: FinalizedTasksClearkComponent },
      { path: 'currenttask', component: CurrentTaskClearkComponent }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(clearkRoutes),
    ClipboardModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    FinalizedTasksClearkComponent,
    CurrentTaskClearkComponent,
    SubtaskTableComponent
  ],
  providers: []
})
export class ClearkModule { }
