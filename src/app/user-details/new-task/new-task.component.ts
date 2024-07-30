import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  taskDescription = new FormControl('', []);
  taskTitle = new FormControl('', []);
  @Output() cancel = new EventEmitter<void>();

  cancelForm() {
    this.cancel.emit();
  }

}
