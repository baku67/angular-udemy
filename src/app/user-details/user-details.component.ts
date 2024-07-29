import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { Task } from './task/task.model';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TaskComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  @Input() userSelected?: User | null

  tasks:Task[] = dummyTasks;

  get userSelectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userSelected?.id);
  }
  
  // userSelectedTasks:Task[] = this.tasks.filter(task => task.userId === this.userSelected?.id);
  // ngOnInit(): void {
  //     this.userSelectedTasks = this.tasks.filter(task => task.userId === this.userSelected?.id);
  //     console.log(this.userSelectedTasks)
  // }




  


}
