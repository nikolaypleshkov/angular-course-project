import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Class from '../types/Class';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private storePath = '/classes';

  classesRef: AngularFirestoreCollection<Class> = null;

  constructor(private store: AngularFirestore) {
    this.classesRef = store.collection(this.storePath);
   }

  getAll(): AngularFirestoreCollection<Class> {
    return this.classesRef;
  }
}
