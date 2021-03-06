import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { IDocumentList } from '../../shared/interfaces/IDocumentList';
import { StudentOnboardService } from '../../core/services/student-onboard.service';
import { DocumentListService } from '../../core/services/document-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../../shared/interfaces/IStudent';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-on-board-form',
  templateUrl: './on-board-form.component.html',
  styleUrls: ['./on-board-form.component.css']
})

/** Onboard Student class. */
export class OnBoardFormComponent implements OnInit {

  // On Board student form group.
  onBoardForm: FormGroup;

  // Field to mark document list as mandatory.
  mandatoryFields = false;

  // variable that holds the default or current value of student.
  student: IStudent;

  // variable that holds list of documents.
  documents: IDocumentList[];

  // variable that holds category wise documents.
  categoryWiseDocument: IDocumentList[];

  // variable that holds the current action being performed.
  actionToPerform: string;

  // variable that holds id of current student.
  currentStuId: number;

  // variable for mandatory checkbox when category switched.
  mandatoryChecboxesValid = true;

  // variable for min DOB date
  minDate = new Date('1995/01/01');

  // variable for max DOB date.
  maxDate = new Date('2003/12/31');

  /**
   *
   * @param fb : FormBuilder
   * @param studentOnboardService : StudentOnBoardService
   * @param documentService : DocumentListService
   * @param acivatedRoute : ActivatedRoute
   * @param router : Router
   * @param toastrService : ToastrService
   */
  constructor(private fb: FormBuilder, private studentOnboardService: StudentOnboardService,
              private documentService: DocumentListService, private acivatedRoute: ActivatedRoute,
              private router: Router, private toastrService: ToastrService) {

  }

  /**
   * Form initialized on Onborad component load.
   */
  ngOnInit() {
    this.actionToPerform = this.acivatedRoute.snapshot.params.actionType;
    this.currentStuId = this.acivatedRoute.snapshot.params.id;

    if (this.currentStuId) {
      this.studentOnboardService.getStudent(this.currentStuId).subscribe(data =>  {
        if (data === null) {
          this.router.navigate(['/page not found']);
          this.toastrService.warning('No such student found!', 'On Boarding Portal');
        } else {
          this.initializeFormWithValues(data);
      }
      });
    }

    this.onBoardForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      category: ['Domestic', Validators.required],
      documentList: this.fb.array([]),
      dob: ['', Validators.required],
      motherName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      fatherName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastScore: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1), Validators.max(100)]]
    });

    this.documentService.getDocumentList().subscribe(data => {
      this.documents = data;
      this.setDocumentList();
      if (this.actionToPerform === 'view') {
        this.onBoardForm.disable();
      }
  });
  }

  /**
   * Method to initialize form with default or current value.
   * @param student : IStudent
   */
  initializeFormWithValues(student: IStudent) {
    this.student = student;
    this.onBoardForm = this.fb.group({
      id: [student.id, Validators.required],
      name: [student.name, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      category: [student.category, Validators.required],
      documentList: this.fb.array([]),
      dob: [student.dob, Validators.required],
      motherName: [student.motherName, Validators.required],
      fatherName: [student.fatherName, Validators.required],
      lastScore: [student.lastScore, [Validators.required,
                                    Validators.pattern('[0-9]*'), Validators.min(1), Validators.max(100)]]
    });
    this.documentService.getDocumentList().subscribe(data => {
          this.documents = data;
          if (this.actionToPerform === 'view') {
            this.onBoardForm.disable();
          }
      });
  }

  /**
   * Method to check that mandatory checkboxes are checked everytime when a user changes the category of student.
   */
  mandatoryCheckboxesValid() {
    const docsCheckboxes = this.onBoardForm.get('documentList').value;
    const mandatoryFieldsNotSelected = this.categoryWiseDocument.filter((document, index) => {
        if (document.isMandatory) {
          return docsCheckboxes[index] !== true;
        }
    });
    if (mandatoryFieldsNotSelected.length > 0) {
      this.mandatoryChecboxesValid = false;
    } else {
      this.mandatoryChecboxesValid = true;
    }
  }

  /**
   * Event fired when student category is toggled.
   * @param e : Event
   */
  toggleMandatoryDocVisibility(e) {
    const categoryDocList = this.documents.filter((documents) => documents.category === this.onBoardForm.get('category').value);
    this.categoryWiseDocument =  categoryDocList;
    if (e.value === 'International') {
      this.mandatoryFields = true;
    } else {
      this.mandatoryFields = false;
    }
    this.mandatoryCheckboxesValid();
  }

  /**
   * Getter property for document fields
   */
  get documentFields() {
    return this.onBoardForm.get('documentList') as FormArray;
  }

  /** Sets the documen t list with all values. */
  setDocumentList() {
    const categoryDocList = this.documents.filter((documents) => documents.category === this.onBoardForm.get('category').value);
    this.categoryWiseDocument =  categoryDocList;
    categoryDocList.map( (doc, index) => this.documentFields.push(
          this.fb.control(this.student ? this.student.documentList[index].isSubmitted : false)));
  }

  /**
   * Method that sets the student value to IStudent type from form value.
   * @param onboardFormValue : NgForm
   */
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

  /**
   * Method that onboards student and then routes to student list page.
   * @param currentStudent : IStudent
   */
  onBoard(currentStudent: IStudent) {
    this.mandatoryCheckboxesValid();
    if(this.mandatoryChecboxesValid) {
    if (this.actionToPerform === 'edit') {
      this.studentOnboardService.updateStudent(currentStudent).subscribe();
      this.toastrService.success('Student updated successfully!', 'On Boarding Portal');

    } else {
      this.studentOnboardService.addStudent(currentStudent).subscribe();
      this.toastrService.success('Student added successfully!', 'On Boarding Portal');
    }
    this.router.navigate(['/dashboard/studentlist']); 
  } else {
    return;
  }
  }

  /**
   * Method that resets the onboard form.
   */
  resetForm() {
    this.onBoardForm.reset();
  }
}
