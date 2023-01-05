import { Injectable } from '@angular/core';
// in the service we are going to create our observable
import {Observable, of} from 'rxjs';
import { TaskList } from 'src/app/mock-tasks';
import { Task } from 'src/app/Tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() : Observable<Task[]>{
    // the of() converts the TaskList array into an observable of the type Task[]
    const taskAsAnObservableVar = of(TaskList);
    return taskAsAnObservableVar;
  }
}
