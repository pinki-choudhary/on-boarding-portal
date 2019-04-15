import { Component, OnInit } from '@angular/core';
import { StudentOnboardService } from '../../core/services/student-onboard.service';
import { IStudent } from '../../shared/interfaces/IStudent';
import { ICategory } from '../../shared/interfaces/ICategory';
import { TrustedString } from '@angular/core/src/sanitization/bypass';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: IStudent[];
  directiveColor = '';
  studentFilter: string;

  categorySelect: FormGroup;
  categoryFilter = 'All';

  categories: ICategory[] = [
    {type: 'All', viewValue: 'All'},
    {type: 'Domestic', viewValue: 'Domestic'},
    {type: 'International', viewValue: 'International'}
  ];
  constructor(private studentOnboardService: StudentOnboardService, private fb: FormBuilder) { }

  ngOnInit() {
    this.categorySelect = this.fb.group({
      categoryType: [null, Validators.nullValidator]
    });

    const toSelect = this.categories.find(studentType => studentType.type === this.categoryFilter );
    this.categorySelect.get('categoryType').setValue(toSelect.type);

    this.listAllStudents();
  }

  listAllStudents() {
    this.studentOnboardService.getStudents().subscribe(data => this.students = data);
  }

  delete(id: number) {
    console.log(id);
  }

}
