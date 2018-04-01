import { Component, OnInit, Input, OnChanges ,SimpleChanges} from '@angular/core';

import { Task } from '../../models/task.model';
import { Subtask } from '../../models/Subtask.model';
import { SubtaskService } from '../../services/subtask.service';

import { Observable } from 'rxjs/Observable';
declare var $:any;

@Component({
  selector: 'app-subtask-table',
  templateUrl: './subtask-table.component.html',
  styleUrls: ['./subtask-table.component.css'],
  providers: [SubtaskService]
})
export class SubtaskTableComponent implements OnInit {

  searchQuery: String = '';
  subtasks : Observable<Subtask[]>;
  constructor(private subtaskService: SubtaskService) { }

  ngOnInit() {
  	this.getSubTasks();
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.task){
      this.getSubTasks();
    }
  }

  @Input() task: Task;

  getSubTasks(): void {
    this.subtaskService.getSubtaskByTaskId(this.task.pk)
      .subscribe(res => this.subtasks = res);
  }

  tasks: Observable<any>;

  clickTableRow(task){
  }

}

