import { Component, inject, OnInit } from '@angular/core';
import { chuckNorrisJoke, dadJokes } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css',
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOnInit(): void {
    // this.jokesService.getDadJoke().subscribe((data: dadJokes) => {
    //   console.log('Dad', data.joke);
    //   this.dadJoke = data.joke;
    // });
    this.refreshDadJoke();
    // this.jokesService
    //   .getChuckNorrisJoke()
    //   .subscribe((data: chuckNorrisJoke) => {
    //     console.log('Chuck ', data.value);
    //     this.chuckNorrisJoke = data.value;
    //   });
    this.refreshChuckNorrisJoke();
  }

  refreshDadJoke() {
    this.jokesService.getDadJoke().subscribe((data: dadJokes) => {
      this.dadJoke = data.joke;
    });
  }

  refreshChuckNorrisJoke() {
    this.jokesService
      .getChuckNorrisJoke()
      .subscribe((data: chuckNorrisJoke) => {
        this.chuckNorrisJoke = data.value;
      });
  }
}
