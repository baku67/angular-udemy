import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { TaskComponent } from "./task/task.component";

interface User {
  id:string;
  name:string;
  avatar:string;
}


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TaskComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  @Input() userSelected?: User | null

  tasks:string[] = ["task1", "task2", "task3"];


}
