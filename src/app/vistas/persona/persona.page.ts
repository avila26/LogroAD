import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  name: string = '';
  namesList: string[] = [];


  constructor() { }

  ngOnInit() {
  }
  addName() {
    if (this.name.trim()) {
      this.namesList.push(this.name.trim());
      this.namesList.sort();
      this.name = '';
    }
  }
}
