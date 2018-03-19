import { Component, OnInit, Input } from '@angular/core';
import { STATUS } from '../enums/status.enum';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../task.service';

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

  tasks: Observable<any>;

  getTasks(): void {
    this.tasks = this.taskService.getTasks(this.searchQuery);
  }

  deleteTask(id: number): void {
    console.log(id);
    this.taskService.deleteTask(id)
      .subscribe(res => this.getTasks());
  }


}
