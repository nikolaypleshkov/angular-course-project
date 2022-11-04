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
        this.store
          .collection('users')
          .doc(user.uid)
          .get()
          .subscribe((user) => {
            localStorage.setItem('user', JSON.stringify(user.data()));
            this.ngZone.run(() => {
              this.router.navigate(['home']);
            });
          });
      } else {
        localStorage.setItem('user', '');
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.store
          .collection('users')
          .doc(result.user?.uid)
          .get()
          .subscribe((user) => {
            // this.SetUserData(user.data());
            this.ngZone.run(() => {
              this.router.navigate(['/home']);
            });
          });
      })
      .catch((error) => {
        throw error.code;
      });
  }

  SignUp(email: string, full_name: string, password: string) {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: full_name,
            photoURL: `https://avatars.dicebear.com/api/bottts/${email[0]}.svg`,
          })
          .then(() => {
            this.SetUserData(result.user);
            this.router.navigate(['/login']);
          });
      })
      .catch((error) => {
        throw error.code;
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.store.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uuid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'student',
    };

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
