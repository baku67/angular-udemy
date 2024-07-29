import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input() selectedUserId?: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  get isSelected() {
    if(this.user.id === this.selectedUserId) {
      return true;
    } else {
      return false;
    }
  }

  onSelectUser() {
    console.log("Clicked: " + this.user.name);
    this.select.emit(this.user.id);
  }
}
