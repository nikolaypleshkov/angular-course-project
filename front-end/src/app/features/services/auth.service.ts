import { Injectable, NgZone } from '@angular/core';

import User from '../types/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    public store: AngularFirestore,
    public fireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SignUp(email: string, full_name: string, password: string) {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: full_name,
          })
          .then(() => {
            this.SetUserData(result.user);
            this.router.navigate(['/login']);
          });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SetUserData(user: any, full_name?: string) {
    const userRef: AngularFirestoreDocument<any> = this.store.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uuid: user.uid,
      email: user.email,
      full_name: user.displayName,
      photo_url: user.photoURL,
    };

    console.log(user);

    return userRef.set(userData, {
      merge: true,
    });
  }

  Logout() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }
}
