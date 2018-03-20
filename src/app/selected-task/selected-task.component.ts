import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { Subtask } from '../models/subtask.model';
import { TaskService } from '../task.service';
import { SubtaskService } from '../subtask.service';
import { Observable } from 'rxjs/Observable';
declare var $:any;

@Component({
  selector: 'app-selected-task',
  templateUrl: './selected-task.component.html',
  styleUrls: ['./selected-task.component.css'],
  providers: [SubtaskService, TaskService]
})
export class SelectedTaskComponent implements OnInit {

  task: Task = new Task(1,'',0,'',0,0);
  tasks: Observable<any>;
  subtasks: Subtask[];

  constructor(
    private taskService: TaskService,
    private subtaskService: SubtaskService,
  ) { }

  ngOnInit() {
    this.getTask();
    this.getSubtasks();
    this.tasks = this.taskService.getTasks('');
  }

  getTask(): void {
    this.taskService.getTask(this.task.pk)
      .subscribe(res => {
        this.task = res;
      });
  }

  getSubtasks(): void {
    this.subtaskService.getSubtaskByTaskId(this.task.pk)
      .subscribe(res => {
        this.subtasks = res;
      });
  }

  selectTask(): void {
    $('.ui.modal.select')
      .modal('show');
  }

  applySelectedTask(task) {
    this.task = task;
    $('.ui.modal.select')
      .modal('hide');
    this.getSubtasks();
  }

  resolveSubtask(subtask) {
    subtask.status = 1;
    this.subtaskService.updateSubtask(subtask)
      .subscribe(res => {});
    this.getSubtasks();
  }

}
