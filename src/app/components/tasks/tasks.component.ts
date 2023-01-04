import { Component } from '@angular/core';
import { TaskList } from 'src/app/mock-tasks';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks : Task[] = TaskList;
}
