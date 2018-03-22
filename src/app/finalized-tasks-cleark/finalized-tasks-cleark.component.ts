import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs/Observable';
declare var $:any;

@Component({
  selector: 'app-finalized-tasks-cleark',
  templateUrl: './finalized-tasks-cleark.component.html',
  styleUrls: ['./finalized-tasks-cleark.component.css']
})
export class FinalizedTasksClearkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tasks: Observable<any>;

}
