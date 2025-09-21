import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummyUser';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  selectedUser = DUMMY_USERS[randomIndex];
}
