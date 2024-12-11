import { Component, Inject } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { PersonTableComponent } from '../person-table/person-table.component';
import { DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [DialogModule, SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css',
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;

  constructor(public dialog: MatDialog) {}

  onPersonClicked(person: EPerson) {
    // alert(this.personTemplate(person));
    this.dialog.open(PersonDialogComponent, {
      data: person,
    });
  }

  personTemplate(person: EPerson) {
    return `
      Person Details:
    
      First Name: ${person.givenName}
      Last Name: ${person.surName}
      Age: ${person.age}
      Email: ${person.email}
      Education:${person.education}
    `;
  }
}

@Component({
  imports: [PersonTableComponent],
  standalone: true,
  template: `
    <app-person-table [person]="person"></app-person-table>
    <button class="btn btn-primary btn-sm" (click)="dialogRef.close()">
      Close
    </button>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        max-width: 500px;
      }
    `,
  ],
})
class PersonDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public person: EPerson,
  ) {}
}
