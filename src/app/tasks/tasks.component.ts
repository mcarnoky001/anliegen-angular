import { Component, OnInit, Input } from '@angular/core';
import { STATUS } from '../enums/status.enum';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  tasks: any;

  getTasks() {
    this.tasks = this.http.get(this.ROOT_URL + '/tasks')
  }

  //
  // tasks = [
  //   new Task('Vendor service metrics','Vendor service metrics', 77541,1),
  //   new Task('Vendor service metrics','Vendor service metrics', 77541,2),
  //   new Task('Vendor service metrics','Vendor service metrics', 77541,0),
  //   new Task('Vendor service metrics','Vendor service metrics', 77541,2),
  //   new Task('Vendor service metrics','Vendor service metrics', 77541,0),
  //   new Task('Vendor service metrics','Vendor service metrics', 77541,1)
  // ]


}
