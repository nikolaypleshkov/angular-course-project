import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  loading: boolean = false;

  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {} 

  handleSubmit(email: string, password: string){
    this.loading = true;
    this.authService.SignIn(email, password).then(() => {
      this.loading = false;
    }).catch((error) => {
      this.loading = false;
      window.alert(error.message)
    })
    }
  }
