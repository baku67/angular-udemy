import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id:string;
  name:string;
  avatar:string;
}


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  @Input() userSelected?: User | null




}
