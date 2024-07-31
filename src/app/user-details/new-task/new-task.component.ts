import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private taskService = inject(TaskService);

  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  // @Output() newTask = new EventEmitter<NewTaskData>();


  cancelForm() {
    this.close.emit();
  }

  onSubmitForm() {

    this.taskService.addTask({
        title:this.enteredTitle, 
        summary:this.enteredSummary, 
        dueDate:this.enteredDueDate
    }, this.userId)

    this.close.emit();

    // *** Output un event qui ajoute une task dans user-details selon le $event transmis
    // this.newTask.emit({
    //   title:this.enteredTitle, 
    //   summary:this.enteredSummary, 
    //   dueDate:this.enteredDueDate
    // })
  }

}
