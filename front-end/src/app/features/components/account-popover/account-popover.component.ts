import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import User from '../../types/user';

@Component({
  selector: 'app-account-popover',
  templateUrl: './account-popover.component.html',
  styleUrls: ['./account-popover.component.scss'],
})
export class AccountPopoverComponent implements OnInit, AfterViewInit {
  user = null;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngAfterViewInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
