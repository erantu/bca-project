import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private router: Router) { }

  getUser() {
    return this.user.asObservable();
  }

  login(user: User) {
    this.user.next(user);
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.user.next(null);
    this.router.navigateByUrl('/');
  }

}

export interface User {
  email: string;
}
