import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare var require: any;


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
        phoneNumber : [0, Validators.maxLength(10)],
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
             skillName: ['SKL',Validators.required],
             percentage:[75]
          })
         ]),
         hobbies: formBuilder.array([
            new FormControl(''),
            new FormControl(''),
            new FormControl(''),
         ]),
         awards: formBuilder.array([
          new FormControl(''),
       ]),
        languages: formBuilder.array([
          formBuilder.group({
              L1: [''],
              Read: [true],
              Write:[false],
              Speak:[false]
          })
        ]),
        projects: formBuilder.array([
          formBuilder.group({
            projectTitle: ['Weeding Machine'],
            usedTools:['Autocad'],
            projectDescription:['This is Very Simple Project']
          }),
        ]),
        experience: formBuilder.array([
          formBuilder.group({
            position: ['Jr.Software Developer'],
            companyName: ['Angular Minds Pvt Ltd'],
            years: ['2023-2025'],
            companyLocation:['Pune'],
            companyDetails:['Best Company Ever']
          })
        ])
       })
  }

  deleteDegree()
  {
    (this.resumeForm.get('degree') as FormArray).removeAt(0);
  }

  // ******************* EDUCATION **********************************
  get education()
  {
    return (this.resumeForm.get('education') as FormArray);
  }
  addEducation()
  {
    let edu = this.formBuilder.group({
      std:[''],
      passYear:[''],
      collegeName: [''],
      percentage: ['']
     });
    this.education.push(edu);
     console.log(this.resumeForm);

  }
  removeEducation(id:any)
  {
    this.education.removeAt(id);
  }


  // ***************** SKILL's *****************************************
  get skills()
  {
    return (this.resumeForm.get('skills') as FormArray);
  }
  addSkills()
  {
     let skill = this.formBuilder.group({
      skillName: [''],
      percentage:[50]
   });
    this.skills.push(skill);
  }
  removeSkills(id:any)
  {
    this.skills.removeAt(id);
  }

  // ************************** Project Details / More ****************************

  get projects()
  {
    return (this.resumeForm.get(`projects`) as FormArray)
  }

  addProjectORMORE()
  {
     let newProject = this.formBuilder.group({
      projectTitle: ['Weeding Machine'],
      usedTools:['Autocad'],
      projectDescription:['This is Very Simple Project']
    });
   this.projects.push(newProject);
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
    return (this.resumeForm.get('experience') as FormArray)
  }

  addExperience()
  {
    let exp = this.formBuilder.group({
      position: ['Jr.Software Developer'],
      companyName: ['Angular Minds Pvt Ltd'],
      years: ['2023-2025'],
      companyLocation:['Mumbai'],
      companyDetails:['Best Company Ever']
    })
    this.experience.push(exp);
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
     return (this.resumeForm.get('hobbies') as FormArray);
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
    return (this.resumeForm.get('awards') as FormArray);
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
    return (this.resumeForm.get('languages') as FormArray);
  }
  addLangulages()
  {
     let lang = this.formBuilder.group({
      L1: [''],
      Read: [true],
      Write:[false],
      Speak:[false]
  })
    this.languages.push(lang);
  }
  removeLanguages(i:number)
  {
    this.languages.removeAt(i);
  }

  //^^^^^^^^^^^^^^^^^ PRINT ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  innerText:any;
  print()
  {
      this.innerText = document.getElementById('formPdf')?.innerText;
        console.log("HTML : ", document.getElementById('formPdf')?.innerHTML)
  }

}
