import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    WelcomeComponent,
    PersonTableComponent,
    EventBindExampleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
