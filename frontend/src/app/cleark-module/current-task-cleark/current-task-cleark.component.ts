import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { UserTaskService } from '../../services/usertask.service';
import { MessageService } from '../../message/message.service';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { BlockerService } from '../../services/blocker.service';

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
        this.messageService.success('New task added to user.');
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

  copyToClipboard(task): void {
    this.messageService.info(`Contract number ${task.contractId} copied to clipboard.`);
  }

  refreshTable() {
    this.getOpenTasks();
    this.getBlockedTasks();
    this.currentTask = null;
  }

  saveTask(task) {
    if (this.currentTask.blocker.length) {
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
