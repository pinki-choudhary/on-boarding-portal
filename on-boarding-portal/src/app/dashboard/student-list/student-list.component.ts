import { Component, OnInit } from '@angular/core';
import { StudentOnboardService } from '../../core/services/student-onboard.service';
import { IStudent } from 'src/app/shared/interfaces/IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: IStudent[];
  directiveColor = '';
  constructor(private studentOnboardService: StudentOnboardService) { }

  ngOnInit() {
    console.log('stu');
    this.listAllStudents();
  }

  listAllStudents() {
    this.studentOnboardService.getStudents().subscribe(data => this.students = data);
  }

  delete(id: number) {
    console.log(id);
  }

}
