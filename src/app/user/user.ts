import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
 @input({ required: true })() id!: string;
 @Input({required:true}) avatar!: string;
 @Input({required: true}) name!: string;
 @Output() select = new EventEmitter<void>();


  get imagePath() {
   return `assets/users/${this.avatar}`;
  }


//signals below
//   avatar = input.required<string>();
//  name = input.required<string>();

//  imagePath = computed(() => `assets/users/${this.avatar}`);

  onSelectUser() {}
    this.select.emit(this.id);
  }