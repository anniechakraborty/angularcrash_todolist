import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task : Task;
  @Output() onDeleteTaskEvent : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  onClick(taskToDel : Task) {
    // console.log(taskToDel);
    this.onDeleteTaskEvent.emit(taskToDel);
  }
  onToggle(task : Task){
    this.onToggleReminder.emit(task);
  }
}
