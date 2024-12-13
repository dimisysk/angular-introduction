import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const JACK_NORRIS_JOKES_API_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  http: HttpClient = inject(HttpClient)
}
