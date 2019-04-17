import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { IDocumentList } from '../../shared/interfaces/IDocumentList';
import { StudentOnboardService } from '../../core/services/student-onboard.service';
import { DocumentListService } from '../../core/services/document-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/shared/interfaces/IStudent';

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
    this.onBoardForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['Domestic', Validators.required],
      documentList: this.fb.array([]),
      dob: ['', Validators.required],
      motherName: ['', Validators.required],
      fatherName: ['', Validators.required],
      lastScore: ['', Validators.required]
    });

    this.documentService.getDocumentList().subscribe(data => {
        this.documents = data;
        this.setDocumentList();
      });

    this.actionToPerform = this.acivatedRoute.snapshot.params.actionType;
    this.currentItemId = this.acivatedRoute.snapshot.params.id;
  }

  toggleVisibility(e) {
    if (e.value === 'International') {
      this.mandatoryFields = true;
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
    categoryDocList.map(doc => this.documentFields.push(this.fb.control(false)));
    console.log(this.categoryWiseDocument);
  }

  getErrorMessage() {
    let inputErrorMessage = '';

    if (this.onBoardForm.get('name').hasError('required') || this.onBoardForm.get('category').hasError('required')
        || this.onBoardForm.get('dob').hasError('required') || this.onBoardForm.get('motherName').hasError('required')
        || this.onBoardForm.get('fatherName').hasError('required') || this.onBoardForm.get('lastScore').hasError('required')) {

      inputErrorMessage = 'Field must have some value';
    }

    return inputErrorMessage;
  }

  onBoardStudent(onboardFormValue) {
    const currentStudent = onboardFormValue;
    console.log(onboardFormValue);
    currentStudent.documentList  = currentStudent.documentList.map((document, index) => {
      return {name: this.documents[index].name,
        category: currentStudent.category, isMandatory: this.mandatoryFields, isSubmitted: document } ;
    });

    this.studentOnboardService.addStudent(currentStudent).subscribe();
    this.router.navigate(['/dashboard/studentlist']);
  }

  resetForm() {
    this.onBoardForm.reset();
  }

}
