import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  loading: boolean = false;
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

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

  handleSubmit(email: string, full_name: string, password: string): void {
    this.loading = true;
    this.authService
      .SignUp(email, full_name, password)
      .then(() => {
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
        switch(error) {
          case 'auth/email-already-in-use':
            this.openSnackBar('Email already in use');
            break;
          case 'auth/invalid-email':
            this.openSnackBar('Invalid email');
            break;
          case 'auth/operation-not-allowed':
            this.openSnackBar('Operation not allowed');
            break;
          case 'auth/weak-password':
            this.openSnackBar('Weak password');
            break;
          default:
            this.openSnackBar('Something went wrong');
            
        }
      });
  }
}
