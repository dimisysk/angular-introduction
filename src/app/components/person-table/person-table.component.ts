import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: "Dimitrios",
    surName:"Syskakis",
    age: 0x2c,
    email: "siskakisdimitris@yahoo.gr"
  }
}
