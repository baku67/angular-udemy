import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS; 
  selectedUserId?: string;


  get selectedUser():User|undefined {
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
