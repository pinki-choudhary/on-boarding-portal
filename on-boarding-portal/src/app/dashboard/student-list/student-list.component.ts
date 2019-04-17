import { Component, OnInit } from '@angular/core';
import { StudentOnboardService } from '../../core/services/student-onboard.service';
import { IStudent } from '../../shared/interfaces/IStudent';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

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
  constructor(private studentOnboardService: StudentOnboardService, public dialog: MatDialog) { }

  ngOnInit() {
    this.listAllStudents();
  }

  listAllStudents() {
    this.studentOnboardService.getStudents().subscribe(data => {
          this.students = data;
          console.log('***********************************');
          console.log(this.students);
    });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      this.delete(id);
    } else {
      console.log('The dialog was closed');
    }
    });
  }

  delete(id: number) {
    this.studentOnboardService.deleteStudent(id).subscribe();
    this.listAllStudents();
  }

}
