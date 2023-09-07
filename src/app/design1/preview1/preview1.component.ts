import { AfterViewInit, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common-service/common.service';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import { Router } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
( pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-preview1',
  templateUrl: './preview1.component.html',
  styleUrls: ['./preview1.component.css']
})
export class Preview1Component  {

  resumeForm!: FormGroup;
  
  constructor(public commonService: CommonService)
  {
    this.resumeForm = commonService.resumeForm;
  }

  get education()
  {
    return this.commonService.education;
  }
  get skills()
  {
    return this.commonService.skills;
  }
  get projects()
  {
    return this.commonService.projects;
  }
  get experience()
  {
    return this.commonService.experience;
  }
  get hobbies()
  {
     return this.commonService.hobbies;
  }
 get awards()
  {
    return this.commonService.awards;
  }
  get languages()
  {
    return this.commonService.languages;
  }
// ^^^^^^^^^^^^^^^^^6 PDF
  generatePDF()
  {
    let a :string = document.getElementById('formPdf')?.innerText as string;
     let docDefination = {
      content: [a]
     }
pdfMake.createPdf(docDefination).open();
console.log("Print : ", this.resumeForm.value);
  }
}
