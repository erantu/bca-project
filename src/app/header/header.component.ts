import { Component, OnInit } from '@angular/core';
import {AuthService, User} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user: User) => this.user = user);
  }
  logout() {
    this.authService.logout();
  }

}
