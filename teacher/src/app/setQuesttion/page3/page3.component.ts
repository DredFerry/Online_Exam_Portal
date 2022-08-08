import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuesPage1Service } from 'src/app/services/ques-page1.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private quesService:QuesPage1Service, private router:Router) { }
  Qset:any=[]
  QuesNum:any 
  SubName:any
  PaperCode:any
  Time:any
  ngOnInit(): void {
    this.QuesNum=sessionStorage.getItem("QuesNum")
    this.QuesNum=parseInt(this.QuesNum)
    this.SubName=sessionStorage.getItem("SubName")
    this.PaperCode=sessionStorage.getItem("PaperCode")
    this.Time=sessionStorage.getItem("Time")

    this.Qset=sessionStorage.getItem("Qset")
    this.Qset=JSON.parse(this.Qset)
    console.log(this.Qset)
    // console.log(typeof(JSON.parse(this.Qset)))
    console.log(this.Qset[1]['1']['question'])

    
  }


  createRange(number: any){
    return new  Array(number)
  }

  upload(){
    this.quesService.send_post_request(
      this.Qset
        ).subscribe()
        this.router.navigate(['/'])
  }
  backPage(){
    this.router.navigate(['/page2'])
  }

}
