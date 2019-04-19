import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { IDocumentList } from '../../shared/interfaces/IDocumentList';
import { StudentOnboardService } from '../../core/services/student-onboard.service';
import { DocumentListService } from '../../core/services/document-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../../shared/interfaces/IStudent';

@Component({
  selector: 'app-on-board-form',
  templateUrl: './on-board-form.component.html',
  styleUrls: ['./on-board-form.component.css']
})
export class OnBoardFormComponent implements OnInit {

  onBoardForm: FormGroup;
  mandatoryFields = false;
  student: IStudent;

  documents: IDocumentList[];
  categoryWiseDocument: IDocumentList[];
  actionToPerform: string;
  currentItemId: number;

  constructor(private fb: FormBuilder, private studentOnboardService: StudentOnboardService,
              private documentService: DocumentListService, private acivatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.actionToPerform = this.acivatedRoute.snapshot.params.actionType;
    this.currentItemId = this.acivatedRoute.snapshot.params.id;

    if (this.currentItemId) {
      this.studentOnboardService.getStudent(this.currentItemId).subscribe(data =>  {
        this.initializeFormWithValues(data);
      });
    }

    this.onBoardForm = this.fb.group({
      name: ['', Validators.required],
      category: ['Domestic', Validators.required],
      documentList: this.fb.array([]),
      dob: ['', Validators.required],
      motherName: ['', Validators.required],
      fatherName: ['', Validators.required],
      lastScore: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });

    this.documentService.getDocumentList().subscribe(data => {
      this.documents = data;
      this.setDocumentList();
      if (this.actionToPerform === 'view') {
        this.onBoardForm.disable();
      }
  });
  }

  initializeFormWithValues(student: IStudent) {
    this.student = student;
    this.onBoardForm = this.fb.group({
      id: [student.id, Validators.required],
      name: [student.name, Validators.required],
      category: [student.category, Validators.required],
      documentList: this.fb.array([]),
      dob: [student.dob, Validators.required],
      motherName: [student.motherName, Validators.required],
      fatherName: [student.fatherName, Validators.required],
      lastScore: [student.lastScore, [Validators.required, Validators.pattern('[0-9]*')]]
    });
    this.documentService.getDocumentList().subscribe(data => {
          this.documents = data;
          if (this.actionToPerform === 'view') {
            this.onBoardForm.disable();
          }
      });
  }

  toggleMandatoryDocVisibility(e) {
    if (e.value === 'International') {
      console.log('Manadatory fields are: ');
      this.mandatoryFields = true;
      console.log(this.mandatoryFields);
    } else {
      this.mandatoryFields = false;
    }
  }

  get documentFields() {
    return this.onBoardForm.get('documentList') as FormArray;
  }

  setDocumentList() {
    const categoryDocList = this.documents.filter((documents) => documents.category === this.onBoardForm.get('category').value);
    this.categoryWiseDocument =  categoryDocList;
    categoryDocList.map( (doc, index) => this.documentFields.push(
          this.fb.control(this.student ? this.student.documentList[index].isSubmitted : false)));
  }

  setOnBoardStudent(onboardFormValue) {
    const currentStudent = onboardFormValue;
    let addIsMandatory = true;
    currentStudent.documentList  = currentStudent.documentList.map((document, index) => {
      if (onboardFormValue.category.toLocaleLowerCase() === 'domestic' &&
            (this.documents[index].name.toLocaleLowerCase() === 'police clearance' ||
              this.documents[index].name.toLocaleLowerCase() === 'passport')) {
                  addIsMandatory = false;
              } else {
                addIsMandatory = true;
              }
      return {name: this.documents[index].name,
        category: currentStudent.category, isMandatory: addIsMandatory, isSubmitted: document } ;
    });

    this.onBoard(currentStudent);
  }

  onBoard(currentStudent: IStudent) {
    console.log(currentStudent);
    if (this.actionToPerform === 'edit') {
      console.log('updating student');
      console.log(currentStudent);
      this.studentOnboardService.updateStudent(currentStudent).subscribe();
    } else {
      console.log('adding student');
      console.log(currentStudent);
      this.studentOnboardService.addStudent(currentStudent).subscribe();
    }
    this.router.navigate(['/dashboard/studentlist']);
  }

  resetForm() {
    this.onBoardForm.reset();
  }

}
