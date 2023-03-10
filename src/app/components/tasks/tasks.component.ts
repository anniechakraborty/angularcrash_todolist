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
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    // since we have used an observable in the service, we need to subscribe to an observable
    // like JS promise, we need to get the data received from the observable and assign it to 
    // our local tasks property as that is the property which is used in the template to display the data.
  }

  delTask(task : Task){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)) )
  }
  toggleTask(task : Task){
    task.reminder = !task.reminder;
    // console.log(task);
    this.taskService.toggleTask(task).subscribe();
  }

  addTask(task : Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
