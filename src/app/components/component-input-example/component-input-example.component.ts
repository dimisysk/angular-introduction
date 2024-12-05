import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = 
  {
    givenName: "Dimitrios",
    surName:"Syskakis",
    age: 0x2c,
    email: "siskakisdimitris@yahoo.gr",
    address: "Munich, Germany"
  };
  person1: Person =
  {
    givenName: "John",
    surName:"Doe",
    age: 0x29,
    email: "johdoe@yahoo.gr",
    address: "New York, USA "
  };
}
