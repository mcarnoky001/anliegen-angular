import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subtask } from '../../models/subtask.model';
import { SubtaskService } from '../../services/subtask.service';

import { Observable } from 'rxjs/Observable';
declare var $:any;

@Component({
  selector: 'app-subtasks',
  templateUrl: './subtasks.component.html',
  styleUrls: ['./subtasks.component.css'],
  providers: [SubtaskService]
})
export class SubtasksComponent implements OnInit {

    searchQuery: String = '';

    constructor(
      private router: Router,
      private subtaskService: SubtaskService) { }

    ngOnInit() {
      this.getSubtasks();
    }
    currentSubtask: Subtask;
    subtasks: Observable<any>;

    getSubtasks(): void {
      this.subtasks = this.subtaskService.getSubtasks(this.searchQuery);
    }

    deleteSubtask(id: number): void {
      this.subtaskService.deleteSubtask(id)
        .subscribe(res => this.getSubtasks());
    }

    updateSubtask(subtask):void {
      this.subtaskService.updateSubtask(subtask)
        .subscribe(res => this.getSubtasks());
    }

    editSubtask(subtask): void {
      this.currentSubtask = subtask;
      $('.ui.modal.edit')
        .modal('show');
    }

    newSubtask(): void {
      this.currentSubtask = new Subtask(0,'Subtask for main task', 0,'Created from angular client',0,2);
      $('.ui.modal.new')
        .modal('show');
    }

    saveSubtask(subtask) {
      this.subtaskService.saveSubtask(subtask)
        .subscribe(res => this.getSubtasks());
    }
}
