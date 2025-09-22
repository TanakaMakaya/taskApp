import { Component, input } from '@angular/core';
import { DUMMY_USERS } from '../dummyUser';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {

  selectedUser = DUMMY_USERS[0];

  get imagePath() {
    return `assets/images/${this.selectedUser.avatar}`;
  }

  onSelectUser() {
   
  
  
  }

}
