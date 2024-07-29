import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

// type User = {
//   id:string;
//   name:string;
//   avatar:string;
// }

// OU
interface User {
  id:string;
  name:string;
  avatar:string;
} 


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    console.log("Clicked: " + this.user.name);
    this.select.emit(this.user.id);
  }
}
