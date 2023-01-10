import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  text : string;
  day : string;
  reminder : boolean = false;

  onSubmit(){
    if(!this.text){
      alert("Please enter a task title!");
      return;
    }
    if(!this.day){
      alert("Please enter the deadline!");
      return;
    }

    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
