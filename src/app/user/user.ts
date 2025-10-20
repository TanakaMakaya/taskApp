import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<void>();


  get imagePath() {
    return `assets/users/${this.avatar}`;
  }


//signals below
//   avatar = input.required<string>();
//  name = input.required<string>();

//  imagePath = computed(() => `assets/users/${this.avatar}`);

  onSelectUser() {
    console.log('User selected:');
  }
}