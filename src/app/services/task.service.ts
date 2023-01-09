import { Injectable } from '@angular/core';

// in the service we are going to create our observable
// import {Observable, of} from 'rxjs';

// removed "of" function as the HttpClient directly returns an observable
import {Observable} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { TaskList } from 'src/app/mock-tasks'; no longer needed
import { Task } from 'src/app/Tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // we created a string propeerty to hold the API url (backend url)
  private apiUrl : string = "http://localhost:5000/tasks";


  // we create a property as initialise it with HttpClient so that we can use it later. 
  // we pass this property to the constructor like we did when we wanted to use this 
  // task service in the tasks component.
  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]>{
    // // the of() converts the TaskList array into an observable of the type Task[]
    // const taskAsAnObservableVar = of(TaskList);
    // return taskAsAnObservableVar;

    // now we will fetch task from the backend
    return this.http.get<Task[]>(this.apiUrl);
  }
}
