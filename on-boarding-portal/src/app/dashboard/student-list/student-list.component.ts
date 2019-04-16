import { Component, OnInit } from '@angular/core';
import { StudentOnboardService } from '../../core/services/student-onboard.service';
import { IStudent } from '../../shared/interfaces/IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: IStudent[];
  directiveColor = '';
  studentFilter: string;

  categoryFilter = 'All';
  constructor(private studentOnboardService: StudentOnboardService) { }

  ngOnInit() {
    this.listAllStudents();
  }

  listAllStudents() {
    this.studentOnboardService.getStudents().subscribe(data => {
          this.students = data;
          console.log(this.students);
    });
  }

  delete(id: number) {
    console.log(id);
  }

}
