import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ClassesService } from 'src/app/features/services/classes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  classes: any;
  
  constructor(private store: AngularFirestore, private classesService: ClassesService) {}

  ngOnInit(): void {
    this.retrieveClasses();
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
}
