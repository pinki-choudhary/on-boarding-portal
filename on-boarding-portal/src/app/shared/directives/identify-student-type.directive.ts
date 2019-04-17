import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIdentifyStudentType]'
})
export class IdentifyStudentTypeDirective implements OnInit {

  @Input() appIdentifyStudentType: string;

  constructor(private el: ElementRef) {
   }
  ngOnInit() {
    if (this.appIdentifyStudentType.toLowerCase() === 'domestic') {
      this.el.nativeElement.style.backgroundColor = '#f8f8ff';
    } else {
      this.el.nativeElement.style.backgroundColor = '#ffc4e1' ;
    }
   }
}
