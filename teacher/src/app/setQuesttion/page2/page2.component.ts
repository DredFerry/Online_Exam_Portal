import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder,  FormControl,  UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuesPage1Service } from 'src/app/services/ques-page1.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  quesPage2Form!:UntypedFormGroup
  constructor(private fb:UntypedFormBuilder,private quesService:QuesPage1Service, private router:Router) {
    this.quesPage2Form=this.fb.group({})
   }
  QuestionsArray:any=[]
  Object:any={}
  Details:any={}
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

  for(let i=1;i<=this.QuesNum;i++){
    this.quesPage2Form.addControl(
      "Question"+i,this.fb.control("")
      )
    this.quesPage2Form.addControl(
      "optionA"+i,this.fb.control("")
      )
    this.quesPage2Form.addControl(
      "optionB"+i,this.fb.control("")
      )
    this.quesPage2Form.addControl(
      "optionC"+i,this.fb.control("")
      )
    this.quesPage2Form.addControl(
      "optionD"+i,this.fb.control("")
      )
    this.quesPage2Form.addControl(
      "Answer"+i,this.fb.control("")
      )
  }


    // console.log( typeof(this.QuesNum))
  //   for (let i=1;i<=this.QuesNum;i++){
  //    this.quesPage2Form=this.fb.group({
  //       Question:[''],
  //       optionA:[''],
  //       optionB:[''],
  //       optionC:[''],
  //       optionD:[''],
  //       Answer:['']
  //   })
  //  this.QuestionsArray[i]=this.quesPage2Form.value
  //  console.log(this.QuestionsArray[i])

  }
    // let formControlFields=[]
    // for(let k=0;k<formData.length;k++){
    //   formControlFields.push({Question:formData[k].Question,control:new FormControl('')});
    // }
    // formControlFields.forEach(f=>this.quesPage2Form.addControl(f.Question,f.control));
    // console.log(formControlFields)
  
  createRange(number: any){
    return new  Array(number)
  }
  onSubmit(){
   this.Details={
    "subject":this.SubName,
    "paperCode":this.PaperCode,
    "numOfQues":this.QuesNum,
   }
      for(let i=1;i<=this.QuesNum;i++){
        
      console.log(this.quesPage2Form.value['Question'+i])
    this.Object[i]={
      // "subject":this.SubName,
      //   "paperCode":this.PaperCode,
      //   "numOfQues":this.QuesNum,
     
          "question":this.quesPage2Form.value['Question'+i],
          "optionA":this.quesPage2Form.value['optionA'+i],
          "optionB":this.quesPage2Form.value['optionB'+i],
          "optionC":this.quesPage2Form.value['optionC'+i],
          "optionD":this.quesPage2Form.value['optionD'+i],
          "answer":this.quesPage2Form.value['Answer'+i]
      
    }
  }


  this.Qset[0]={
    "subject":this.SubName,
    "paperCode":this.PaperCode,
    "numOfQues":this.QuesNum,
   }
  this.Qset[1]=this.Object
   sessionStorage.setItem("Qset",JSON.stringify(this.Qset))
  console.log(typeof(this.Qset))
  console.log(this.Qset)
  this.router.navigate(['/page3'])
//  this.quesService.send_post_request(
//   this.Qset
//     ).subscribe()
  }

  backPage(){
    this.router.navigate(['/page1'])
  }

}
