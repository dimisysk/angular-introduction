import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Credentials, loggedInUser, User } from '../interfaces/user';

const API_URL = `${environment.apiURL}/user`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);

  user = signal<loggedInUser | null>(null);

  constructor() {
    effect(() => {
      if (this.user()) {
        console.log('User loggedin', this.user().fullname);
      } else {
        console.log('No user logged in');
      }
    });
  }

  registerUser(user: User) {
    return this.http.post<{ msg: string }>(`${API_URL}/register`, user);
  }

  checkDuplicateEmail(email: string) {
    return this.http.get<{ msg: string }>(
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{ access_token: string }>(
      `${API_URL}/login`,
      credentials,
    );
  }
}
