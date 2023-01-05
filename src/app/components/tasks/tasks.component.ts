import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks : Task[] = [];
  // in order to use the taskservice or any service for that matter, we need to add it as a 
  // provider into the constructor
  constructor (private taskService : TaskService ) {
    // we are using taskService, an object of the service we have declared, 
    // only inside the constructor so we have decalred it as private    
  }

  ngOnInit() : void {
    // we have used the provider passed to the constructor here because ngOnInit is a lifecycle 
    // function that gets called immediately
    this.tasks = this.taskService.getTasks();
  }
}
