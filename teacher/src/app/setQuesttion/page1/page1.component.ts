import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuesPage1Service } from 'src/app/services/ques-page1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  
  quesPage1Form!:UntypedFormGroup

  get QuesNum(){
    return this.quesPage1Form.get('QuesNum');
  }
  get SubName(){
    return this.quesPage1Form.get('SubName');
  }
  get PaperCode(){
    return this.quesPage1Form.get('PaperCode');
  }
  get Time(){
    return this.quesPage1Form.get('Time');
  }

  constructor(private fb:UntypedFormBuilder,private quesService:QuesPage1Service, private router:Router) { }

  ngOnInit(): void {
    this.quesPage1Form=this.fb.group({
      QuesNum:[''],
      SubName:[''],
      PaperCode:[''],
      Time:['']
    })
  }
  OnSubmit(){

    sessionStorage.setItem("QuesNum",this.QuesNum?.value)
    sessionStorage.setItem("SubName",this.SubName?.value)
    sessionStorage.setItem("PaperCode",this.PaperCode?.value)
    sessionStorage.setItem("Time",this.Time?.value)
    
    // this.quesService.send_post_request(
    //   this.quesPage1Form.value
    
    // ).subscribe()
    sessionStorage.setItem("value",JSON.stringify(this.quesPage1Form.value))
    this.router.navigate(['/page2'])
  }

}
