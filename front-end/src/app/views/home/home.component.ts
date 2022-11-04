import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ClassesService } from 'src/app/features/services/classes.service';
import { map } from 'rxjs/operators';
import { TasksService } from 'src/app/features/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  classes: any;

  tasks: any;
  task_due_dates: Date[] = [];

  user = null;

  constructor(
    private store: AngularFirestore,
    private route: Router,
    private classesService: ClassesService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.retrieveClasses();
      this.retrieveTasks();
  }

  retrieveClasses(): void {
    this.classesService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.classes = data;
      });
  }

  retrieveTasks(): void {
    this.tasksService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.tasks = data;
      });
  }
}
