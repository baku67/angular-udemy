import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
// import * as uuid from 'uuid';
import { TaskService } from './tasks.service';



@Component({
  selector: 'app-user-details',
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
  
  // onCompleteTask(id:string) {
  //   return this.taskService.removeTask(id);
  // }


  toggleForm() {
    this.formState = !this.formState;
  }

  onCloseForm() {
    this.formState = false; 
  }
  


}
