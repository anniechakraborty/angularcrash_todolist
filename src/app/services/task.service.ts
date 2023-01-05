import { Injectable } from '@angular/core';
import { TaskList } from 'src/app/mock-tasks';
import { Task } from 'src/app/Tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() : Task[]{
    return TaskList;
  }
}
