import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NewTaskData, Task } from '../task/task.model';


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


  @Output() cancel = new EventEmitter<void>();

  @Output() newTask = new EventEmitter<NewTaskData>();


  cancelForm() {
    this.cancel.emit();
  }

  onSubmitForm() {

    // Output un event qui ajoute une task dans user-details selon le $event transmis
    this.newTask.emit({
      title:this.enteredTitle, 
      summary:this.enteredSummary, 
      dueDate:this.enteredDueDate
    })
  }

}
