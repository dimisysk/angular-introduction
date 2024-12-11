import { Component, Input } from '@angular/core';
import { EPerson, Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css',
})
export class PersonTableComponent {
  @Input() person: Person | EPerson | undefined;

  isPerdson() {
    return this.person && 'address' in this.person;
  }
  isEPerdson() {
    return this.person && 'education' in this.person;
  }
}
