import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuesPage1Service } from '../services/ques-page1.service';

@Component({
  selector: 'app-get-pcode',
  templateUrl: './get-pcode.component.html',
  styleUrls: ['./get-pcode.component.css']
})
export class GetPCodeComponent implements OnInit {

  constructor(private fb:UntypedFormBuilder,private quesService:QuesPage1Service, private router:Router) { }
  getPaperCodeForm!:UntypedFormGroup

  get PaperCode(){
    return this.getPaperCodeForm.get('paperCode');
  }
  ngOnInit(): void {
    this.getPaperCodeForm=this.fb.group({
      paperCode:[''],
    })
  }
  
  OnSubmit(){
    console.log(this.getPaperCodeForm.value)
    this.quesService.send_code(
      this.getPaperCodeForm.value
        ).subscribe()
        this.router.navigate(['/Tresult'])
      }
      
      OnBack(){
        this.router.navigate(['/'])
        
  }


}
