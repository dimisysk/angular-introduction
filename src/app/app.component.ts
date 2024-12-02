import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Dimitrios";

  person0 = 
  {
    givenName: "Dimitrios",
    surName:"Syskakis",
    age: 0x2c,
    email: "siskakisdimitris@yahoo.gr",
    address: "Munich, Germany"
  }
  person1 =
  {
    givenName: "John",
    surName:"Doe",
    age: 0x29,
    email: "johdoe@yahoo.gr",
    address: "New York, USA "
  }
  
}
