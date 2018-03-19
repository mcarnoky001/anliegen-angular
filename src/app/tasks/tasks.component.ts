import { Component, OnInit, Input } from '@angular/core';
import { STATUS } from '../enums/status.enum';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../task.service';
declare var $:any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {

  searchQuery: String = '';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  currentTask: Task;
  tasks: Observable<any>;

  getTasks(): void {
    this.tasks = this.taskService.getTasks(this.searchQuery);
  }

  deleteTask(id: number): void {
    console.log(id);
    this.taskService.deleteTask(id)
      .subscribe(res => this.getTasks());
  }

  updateTask(task):void {
    console.log(task);
    this.taskService.updateTask(task)
      .subscribe(res => this.getTasks());
  }

  editTask(task): void {
    this.currentTask = task;
    $('.ui.modal')
      .modal('show');
  }


}
