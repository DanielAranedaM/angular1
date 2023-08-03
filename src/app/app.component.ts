import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string;
  email : string;
  website : string;
  hobbies : string[];
  showHobbies: boolean;

  constructor(){
    this.name = "Daniel";
    this.email = "dan.ar@gmail.com";
    this.website = "http://www.google.com";
    this.hobbies = ['dibujar ','programar ','basketball'];
    this.showHobbies = false;
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby: { value: string; }){
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }
}
