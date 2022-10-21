import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: UntypedFormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  error: string = '';

  loading: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  matcher = new MyErrorStateMatcher();
  constructor(
    private router: Router,
    public authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  handleSubmit(email: string, password: string) {
    this.loading = true;
    this.authService
      .SignIn(email, password)
      .then(() => {
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
        switch (err) {
          case 'auth/user-not-found':
            this.openSnackBar('User not found');
            break;
          case 'auth/wrong-password':
            this.openSnackBar('Wrong password');
            break;
          case 'auth/invalid-email':
            this.openSnackBar('Invalid Email');
            break;
          default:
            this.error = 'Something went wrong';
        }
      });
  }
}
