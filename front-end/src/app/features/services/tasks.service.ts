import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private storePath = '/tasks';

  tasksRef: AngularFirestoreCollection<Task> = null;

  constructor(private store: AngularFirestore) {
    this.tasksRef = store.collection(this.storePath);
   }

   getAll(): AngularFirestoreCollection<Task> {
      return this.tasksRef;
    }
}
