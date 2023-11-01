import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   @ViewChild('dateControl') dateControl: ElementRef;

   title = 'test-angular';

   form: FormGroup;

   dateFormControl:FormControl = new FormControl('');
   myModel = '';
   maskRegx = [/[0-9]/,/[0-9]/, '/', /[0-9]/,/[0-9]/, '/', /[0-9]/,/[0-9]/, /[0-9]/,/[0-9]/];
   config = {
      mask: this.maskRegx,
      guide: false
   }

   constructor() {
      this.formBuild();
   }

   formBuild(){
      this.form = new FormGroup({
         dateFormControl: this.dateFormControl
      });
   }
}
