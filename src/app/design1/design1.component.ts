import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.css']
})
export class Design1Component {

  resumeForm!:FormGroup
  constructor(private formBuilder:FormBuilder)
  {
       this.resumeForm = formBuilder.group({
        fullName : ['L F M'],
        degree : formBuilder.array([ new FormControl() ]),
        aboutMe : ['About Me'],
        phoneNumber : ['Phone Number'],
        email : [''],
        address : ['Address'],
        // Education
        education: formBuilder.array([
           formBuilder.group({
            std:['10th Std'],
            passYear:['05/2012'],
            collegeName: ['VMV Bardi'],
            percentage: [79.45]
           }),
          //  formBuilder.group({
          //   std:['12th/Deploma '],
          //   passYear:['05/2014'],
          //   collegeName: ['Yashavant Jr College, Bhose (K)'],
          //   percentage: [60.77]
          //  }),
          //  formBuilder.group({
          //   std:['Degress (Branch)'],
          //   passYear:['05/2019'],
          //   collegeName: ['SKN SINHGAD COLLEGE OF ENGINNERING, KORTI PANDHARPUR'],
          //   percentage: [73.27]
          //  })
        ]),
         skills: formBuilder.array([
          formBuilder.group({
             skillName: ['SKL'],
             percentage:[99]
          })
         ])
       })
  }

  deleteDegree()
  {
    (this.resumeForm.get('degree') as FormArray).removeAt(0);
  }

  // * EDUCATION
  addEducation()
  {
    let edu = this.formBuilder.group({
      std:[''],
      passYear:[''],
      collegeName: [''],
      percentage: ['']
     });
     (this.resumeForm.get('education') as FormArray)?.push(edu);
  }
  removeEducation(id:any)
  {
    (this.resumeForm.get('education') as FormArray)?.removeAt(id);
  }

  // * SKILL's
  addSkills()
  {
     let skill = this.formBuilder.group({
      skillName: [''],
      percentage:[99]
   });
    (this.resumeForm.get('skills')?.value as FormArray).push(skill);
  }

}
