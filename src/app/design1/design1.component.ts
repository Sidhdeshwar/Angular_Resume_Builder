import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { CommonService } from '../common-service/common.service';
( pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.css']
})
export class Design1Component {

  resumeForm!:FormGroup;
  addBigDetails:string = '';
  constructor(private formBuilder:FormBuilder, private commonService:CommonService)
  {
       this.resumeForm =  this.commonService.callFirstForResumeForm();
  }
  // ^ PHOTO
PHOTO_ID:any
  uploadPhoto(event:any)
  {
    this.resumeForm = this.commonService.uploadPhoto(event);
  }
// * FULL NAME && Degree
  deleteDegree()
  {
    this.resumeForm = this.commonService.deleteDegree();
  }
  // ******************* EDUCATION **********************************
  get education()
  {
    return this.commonService.education;
  }
  addEducation()
  {
     this.resumeForm = this.commonService.addEducation();
  }
  removeEducation(id:any)
  {
    this.education.removeAt(id);
  }
  // ***************** SKILL's *****************************************
  get skills()
  {
    return this.commonService.skills;
  }
  addSkills()
  {
    this.resumeForm =  this.commonService.addSkills();
  }
  removeSkills(id:any)
  {
    this.skills.removeAt(id);
  }

  // ************************** Project Details / More ****************************

  get projects()
  {
    return this.commonService.projects;
  }

  addProjectORMORE()
  {
      this.resumeForm = this.commonService.addProjectORMORE();
  }

  removeProject(i:number)
  {
    this.projects.removeAt(i);
    if(this.projects?.controls?.length==0)
    {
       this.resumeForm.removeControl('projects');
       console.log("REm Control : ", this.resumeForm.value);
    }
  }

  // ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Work Experience ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  get experience()
  {
    return this.commonService.experience;
  }

  addExperience()
  {
      this.resumeForm = this.commonService.addExperience();
  }

  removeExperience(i:number)
  {
    this.experience.removeAt(i);
    if(this.experience?.controls?.length==0)
    {
       this.resumeForm.removeControl('experience');
       console.log("REm EXP : ", this.resumeForm.value);
    }
  }
    // ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Work Experience ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  // ?????????????? 1) INTEREST/HOBBIES ???????????????????
  get hobbies()
  {
     return this.commonService.hobbies;
  }
addHobbies()
{
  this.hobbies.push(new FormControl(''));
}
removeHobbies(i:number)
{
  this.hobbies.removeAt(i);
}

  // ?????????????? 1) Awards/Achievements ???????????????????
  get awards()
  {
    return this.commonService.awards;
  }
  addAwards()
  {
    this.awards.push(new FormControl(''));
  }
  removeAwards(i:number)
  {
    this.awards.removeAt(i);
  }
  // ?????????????? 3) Awards/Achievements ???????????????????
  get languages()
  {
    return this.commonService.languages;
  }
  addLangulages()
  {
      this.resumeForm = this.commonService.addLangulages();
  }
  removeLanguages(i:number)
  {
    this.languages.removeAt(i);
  }

  //^^^^^^^^^^^^^^^^^ PRINT ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  innerText:any;
  generatePDF()
  {
    let a :string = document.getElementById('formPdf')?.innerHTML as string;
     let docDefination = {
      content: [a]
     }
// pdfMake.createPdf(docDefination).open();
console.log("Print : ", this.resumeForm.value);
  }



}
