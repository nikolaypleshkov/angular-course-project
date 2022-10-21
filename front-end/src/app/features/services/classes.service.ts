import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import Class from '../types/Class';

@Injectable({
  providedIn: 'root',
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

  getByID(id: string): any {
    return this.classesRef
      .doc(id)
      .get();
  }

  getStudentCollectionFromClass(classId: string): any {
    return this.classesRef
      .doc(classId)
      .collection('students').valueChanges();
  }
}
