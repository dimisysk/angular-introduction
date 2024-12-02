import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person: Person = {
    givenName: "Dimitrios",
    surName:"Syskakis",
    age: 0x2c,
    email: "siskakisdimitris@yahoo.gr",
    address: "Wolfratshauser Strasse"
  }
}
