import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIdentifyStudentType]'
})

/**
 * Directive to differentiate between student categories.
 */
export class IdentifyStudentTypeDirective implements OnInit {

  // Input variable that takes student category type.
  @Input() appIdentifyStudentType: string;

  constructor(private el: ElementRef) {
  }
  ngOnInit() {

    // Sets the card color depending on the student category.
    if (this.appIdentifyStudentType.toLowerCase() === 'domestic') {
      this.el.nativeElement.style.backgroundColor = '#f8f8ff';
    } else {
      this.el.nativeElement.style.backgroundColor = '#ffc4e1' ;
    }
  }
}
