import { Component, OnInit } from '@angular/core';
import { StudentOnboardService } from '../../core/services/student-onboard.service';
import { IStudent } from '../../shared/interfaces/IStudent';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

/**
 * Student List Component class
 */
export class StudentListComponent implements OnInit {

  // variable that holds array of students.
  students: IStudent[];

  /**
   *
   * @param studentOnboardService : StudentOnboardService
   * @param dialog : MatDialog
   * @param toastrService : ToastrService
   */
  constructor(private studentOnboardService: StudentOnboardService, public dialog: MatDialog, private toastrService: ToastrService) { }

  /**
   * Lists the students when component loads.
   */
  ngOnInit() {
    this.listAllStudents();
  }

  /**
   * Gets all the students from the student service.
   */
  listAllStudents() {
    this.studentOnboardService.getStudents().subscribe(data => {
          this.students = data;
    });
  }

  /**
   * This method opens the confirmation dialog when deleting a student.
   * @param id : number
   */
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      this.delete(id);
    } else {
    }
    });
  }

  /**
   * Deletes teh student by the id passed.
   * @param id : number
   */
  delete(id: number) {
    this.studentOnboardService.deleteStudent(id).subscribe();
    this.listAllStudents();
    this.toastrService.warning('Student deleted successfully!', 'On Boarding Portal');
  }

}
