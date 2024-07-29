import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Task } from './task.model';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!:Task;
}
