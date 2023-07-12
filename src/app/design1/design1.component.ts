import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.css']
})
export class Design1Component {

  resumeForm!:FormGroup;
  addBigDetails:string = '';
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
             percentage:[75]
          })
         ]),
         hobbies: formBuilder.array([
            new FormControl('A'),
            new FormControl('B'),
            new FormControl('C'),
         ]),
         awards: formBuilder.array([
          new FormControl('Award'),
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
     console.log(this.resumeForm);
     
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
      percentage:[50]
   });
    (this.resumeForm.get('skills') as FormArray).push(skill);
  }
  removeSkills(id:any)
  {
    (this.resumeForm.get(`skills`) as FormArray)?.removeAt(id);
  }

  // * Project Details / More

  addProjectORMORE()
  {
    let size = 0;
    for(let obj in this.resumeForm.controls)
    {
      size++;
    }
    (this.resumeForm.addControl( `demo${size}` , this.formBuilder.array([
      this.formBuilder.group({
        title: ['Weeding Machine'],
        tools:['Autocad'],
        description:['This is Very Simple Project']
      }),
    ]) ));
   console.log("Z ",this.resumeForm.value);
   
  }

  // ?????????????? 1) INTEREST/HOBBIES ???????????????????
addHobbies()
{
  (this.resumeForm.get('hobbies') as FormArray ).push(new FormControl('New'));
}
removeHobbies(i:number)
{
  (this.resumeForm.get('hobbies') as FormArray ).removeAt(i);
}

  // ?????????????? 1) Awards/Achievements ???????????????????
  addAwards()
  {
    (this.resumeForm.get('awards') as FormArray ).push(new FormControl('New'));
  }
  removeAwards(i:number)
  {
    (this.resumeForm.get('awards') as FormArray ).removeAt(i);
  }


}
