import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { UserTaskService } from '../services/usertask.service';

import { Observable } from 'rxjs/Observable';

declare var $:any;

@Component({
  selector: 'app-current-task-cleark',
  templateUrl: './current-task-cleark.component.html',
  styleUrls: ['./current-task-cleark.component.css'],
  providers: [UserTaskService, TaskService]
})
export class CurrentTaskClearkComponent implements OnInit {

  openedTaskFlag: boolean = false;
  openTasks: Task[];
  blockedTasks: Task[];
  currentTask: Task;
  taskSelected: Boolean=false;

  constructor(
    private userTaskService: UserTaskService,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getOpenTasks();
    this.getBlockedTasks();
  }


  getOpenTasks(): void {
    this.openedTaskFlag = false;
    this.userTaskService.getOpenUserTasks()
      .subscribe(res => {
        this.openTasks = res;
        if (this.openTasks.length > 0) this.openedTaskFlag = true;
      });
  }

  getNewTask() {
    this.userTaskService.getNewTask()
      .subscribe(res => this.refreshTable())
  }

  getBlockedTasks(): void {
    this.userTaskService.getBlockedUserTasks()
      .subscribe(res => this.blockedTasks = res);
  }

  clickTableRow(task){
    this.taskSelected = true;
  	this.currentTask = task;
  }

  copyContractNumber() {
    
  }

  refreshTable() {
    this.getOpenTasks();
    this.getBlockedTasks();
    this.currentTask = null;
  }

  saveTask(task) {
    if (this.currentTask.blocker != '') {
      this.taskService.blockTask(task)
        .subscribe(res => {
          this.refreshTable();      
      });
    }
    else {
      this.taskService.updateTask(task)
        .subscribe(res => {
          this.refreshTable();      
      });
    }
  }

}
