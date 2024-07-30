import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { NewTaskData, Task } from './task/task.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewTaskComponent } from './new-task/new-task.component';
// import * as uuid from 'uuid';
import { TaskService } from './tasks.service';



@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ CommonModule, MatButtonModule, TaskComponent, MatFormFieldModule, NewTaskComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  @Input() userSelected?: User | null


  formState:boolean = false;


  constructor(private taskService:TaskService) {}



  get userSelectedTasks() {
    return this.taskService.getUserTasks(this.userSelected!.id);
  }
  
  onCompleteTask(id:string) {
    return this. taskService.removeTask(id);
  }

  onAddTask(taskData: NewTaskData) {
    this.taskService.addTask(taskData, this.userSelected!.id)
    this.formState = false; 
  }



  toggleForm() {
    this.formState = !this.formState;
  }

  onCancelForm() {
    this.formState = false; 
  }
  


}
