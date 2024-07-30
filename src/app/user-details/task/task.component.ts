import { Component, Input, Output, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Task } from './task.model';
import { EventEmitter } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatButtonModule, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!:Task;
  // @Output() complete = new EventEmitter<string>();

  private taskService:TaskService = inject(TaskService);

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }


}
