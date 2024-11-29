import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Dimitrios";

  person = {
    givenName: "Dimitrios",
    surName:"Syskakis",
    age: 0x2c,
    email: "siskakisdimitris@yahoo.gr"
  }
}
