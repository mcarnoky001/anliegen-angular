import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [TaskService]
})
export class NewTaskComponent implements OnInit {

  task: Task = new Task(0,'The new task', 'description', 1,'Created from angular client', 2,'Blocker', 1,'Note', '2018-01-01');

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  saveTask() {
    this.taskService.saveTask(this.task)
      .subscribe(res => this.router.navigate(['/tasks']));;
  }
}
