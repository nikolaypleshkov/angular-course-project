import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ClassesService } from 'src/app/features/services/classes.service';
import { map } from 'rxjs/operators';
import { TasksService } from 'src/app/features/services/tasks.service';

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
  
  constructor(private store: AngularFirestore, private classesService: ClassesService, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.retrieveClasses();
    this.retrieveTasks()
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  retrieveClasses(): void {
    this.classesService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.classes = data;
    });
  }

  retrieveTasks(): void {
    this.tasksService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tasks = data;
    });
  }
}
