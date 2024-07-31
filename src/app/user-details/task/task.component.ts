import { Component, Input, Output, inject } from '@angular/core';
import { Task } from './task.model';
import { EventEmitter } from '@angular/core';
import { TaskService } from '../tasks.service';



@Component({
  selector: 'app-task',
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
