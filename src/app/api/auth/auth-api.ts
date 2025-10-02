import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../shared/models/entities';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  readonly user = signal<User | null>(null);

  private readonly http = inject(HttpClient);

  register(account: User) {
    return this.http.post<User>('/api/user', account);
  }

  login(credentials: { email: string; password: string }) {
    return this.http
      .get<User>('/api/account', {
        headers: {
          Authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password),
        },
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.user.set(response);
        })
      );
  }
}
