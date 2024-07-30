import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NewTaskData, Task } from '../task/task.model';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule, FormsModule ],
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
