import { AfterViewInit, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-preview1',
  templateUrl: './preview1.component.html',
  styleUrls: ['./preview1.component.css']
})
export class Preview1Component  {

  resumeForm!: any;
  constructor(public commonService: CommonService)
  {
    this.resumeForm = commonService.resumeForm;
    // let a = localStorage.getItem('resume');
    //  if(a)
    //  {
    //    this.resumeForm = JSON.parse(a);
    //  }
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
}
