import { Component, signal, computed } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from "./user-details/user-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, UserComponent, UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId?: string;


  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  
  onSelectUser(id: string) {

    if(this.selectedUserId !== id) {
      this.selectedUserId = id;
    }
    else {
      this.selectedUserId = undefined;
    }
    
  
  }

  
}
