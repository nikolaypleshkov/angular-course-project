import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassesService } from 'src/app/features/services/classes.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  public classId: string = '';

  public class = null;

  constructor(route: ActivatedRoute, private classSerives: ClassesService) {
    route.params.subscribe((params) => {
      this.classId = params['id'];
    });
  }

  ngOnInit(): void {
    this.retrieveClassById(this.classId);
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
}
