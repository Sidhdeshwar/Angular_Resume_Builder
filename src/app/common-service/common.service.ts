import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  resumeForm!:FormGroup;
  previewForm:any;
  addBigDetails:string = '';
  constructor(private formBuilder:FormBuilder)
  {
     this.callFirstForResumeForm();
  }

  callFirstForResumeForm()
  {
    this.resumeForm = this.formBuilder.group({
      gender: ['Mr/Ms'],
      fullName : [''],
      degree : this.formBuilder.array([ new FormControl('X') ]),
      photoID: [''],
      aboutMe : [''],
      phoneNumber : ['', Validators.maxLength(10)],
      email : [''],
      address : [''],
      // Education
      education: this.formBuilder.array([
         this.formBuilder.group({
          std:['10th Std'],
          passYear:['05/2012'],
          collegeName: [''],
          percentage: []
         }),
        //  this.formBuilder.group({
        //   std:['12th/Deploma '],
        //   passYear:['05/2014'],
        //   collegeName: ['Yashavant Jr College, Bhose (K)'],
        //   percentage: [60.77]
        //  }),
        //  this.formBuilder.group({
        //   std:['Degress (Branch)'],
        //   passYear:['05/2019'],
        //   collegeName: ['SKN SINHGAD COLLEGE OF ENGINNERING, KORTI PANDHARPUR'],
        //   percentage: [73.27]
        //  })
      ]),
       skills: this.formBuilder.array([
        this.formBuilder.group({
           skillName: ['',Validators.required],
           percentage:[75]
        })
       ]),
       hobbies: this.formBuilder.array([
          new FormControl(''),
          new FormControl(''),
          new FormControl(''),
       ]),
       awards: this.formBuilder.array([
        new FormControl(''),
     ]),
      languages: this.formBuilder.array([
        this.formBuilder.group({
            L1: [''],
            Read: [false],
            Write:[false],
            Speak:[false]
        })
      ]),
      projects: this.formBuilder.array([
        this.formBuilder.group({
          projectTitle: [''],
          usedTools:[''],
          projectDescription:[''],
          QRCode: ['QR']
        }),
      ]),
      experience: this.formBuilder.array([
        this.formBuilder.group({
          position: ['Jr.Software Developer'],
          companyName: ['Angular Minds Pvt Ltd'],
          years: ['2023-2025'],
          companyLocation:['Pune'],
          companyDetails:['']
        })
      ])
     })

     return this.resumeForm;
  }

  // ^ PHOTO
// PHOTO_ID:any
  uploadPhoto(event:any)
  {
     let reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = (e:any)=>{
        // this.PHOTO_ID = e.target.result;
        
        this.resumeForm.patchValue({
          photoID: e.target.result
        })
     }
     return this.resumeForm;
  }
// * FULL NAME && Degree
  deleteDegree()
  {
    (this.resumeForm.get('degree') as FormArray).removeAt(0);
    return this.resumeForm;
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
    return this.resumeForm;
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
    return this.resumeForm;
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
      projectTitle: [''],
      usedTools:[''],
      projectDescription:[''],
      QRCode:['QR']
    });
   this.projects.push(newProject);
   return this.resumeForm;
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

  removeQRCode(i:number)
  {
    console.log(delete this.projects.value[i].QRCode)
    console.log(this.projects.value[i-1]);
    
    return this.resumeForm;
  }

  addQRCodeHere(i:number, event:any)
  {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e:any)=>{
   this.projects.at(i).patchValue({
    QRCode: e.target.result
   });
      
    }
    return this.resumeForm;
  }

  // ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Work Experience ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  get experience()
  {
    return (this.resumeForm.get('experience') as FormArray)
  }

  addExperience()
  {
    let exp = this.formBuilder.group({
      position: [''],
      companyName: [''],
      years: [''],
      companyLocation:[''],
      companyDetails:['']
    })
    this.experience.push(exp);
    return this.resumeForm;
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
      Read: [false],
      Write:[false],
      Speak:[false]
  })
    this.languages.push(lang);
    return this.resumeForm;
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
