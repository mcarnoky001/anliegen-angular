import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { UserTaskService } from '../services/usertask.service';
import { MessageService } from '../services/message.service';
import { BlockerService } from '../services/blocker.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

declare var $:any;

@Component({
  selector: 'app-current-task-cleark',
  templateUrl: './current-task-cleark.component.html',
  styleUrls: ['./current-task-cleark.component.css'],
  providers: [UserTaskService, TaskService, BlockerService]
})
export class CurrentTaskClearkComponent implements OnInit {

  blockers: any;
  openTasks: Task[];
  blockedTasks: Task[];
  currentTask: Task;
  taskSelected: Boolean=false;

  constructor(
    private userTaskService: UserTaskService,
    private taskService: TaskService,
    private blockerService: BlockerService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getOpenTasks();
    this.getBlockedTasks();
    this.getBlockers();
    ; 
  }

  getBlockers() {
    this.blockerService.getBlockers()
      .subscribe(res => this.blockers = res);
  }

  getOpenTasks(): void {
    this.userTaskService.getOpenUserTasks()
      .subscribe(res => {
        this.openTasks = res;
      });
  }

  getNewTask() {
    this.userTaskService.getNewTask()
      .subscribe(res => { 
        this.refreshTable();
      });
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
