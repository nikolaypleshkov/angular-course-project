import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/features/services/classes.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  public classId: string = '';

  public class = null;
  public students = [];
  public tasks = [];

  constructor(route: ActivatedRoute, private router: Router, private classSerives: ClassesService) {
    route.params.subscribe((params) => {
      this.classId = params['id'];
    });
  }

  ngOnInit(): void {
    this.retrieveClassById(this.classId);
    this.retrieveStudentsFromClass(this.classId);
    this.retrieveTasksFromClass(this.classId);
  }

  retrieveClassById(id: string) {
    this.classSerives.getByID(id).subscribe((doc) => {
      console.log(doc.data());
      if (doc.exists) {
        this.class = doc.data();
      } else {
        return null;
      }
    });
  }

  retrieveStudentsFromClass(id: string) {
    this.classSerives.getStudentCollectionFromClass(id).subscribe((doc) => {
      if (doc) {
        this.students = doc;
      } else {
        return null;
      }
    });
  }

  retrieveTasksFromClass(id: string) {
    this.classSerives.getTaskCollectionFromClass(id).subscribe((doc) => {
      if (doc) {
        this.tasks = doc;
      } else {
        return null;
      }
    });
  }

  handleNavigation(){
    this.router.navigate(['/task', this.classId]);
  }
}
