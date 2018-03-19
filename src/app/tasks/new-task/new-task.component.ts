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

  task: Task = new Task('The new task', 1,'Created from angular client',57381,2);

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  saveTask() {
    const data = {
      id: null,
      name: this.task.name,
      user: 1,
      description: this.task.description,
      contractId: this.task.contractId,
      status: this.task.status
    };
    this.taskService.saveTask(data)
      .subscribe(res => this.router.navigate(['/']));;
  }
}
