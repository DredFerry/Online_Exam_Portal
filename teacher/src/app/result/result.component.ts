import { Component, OnInit } from '@angular/core';
import { QuesPage1Service } from '../services/ques-page1.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private quesService:QuesPage1Service) { }
  Result_Data:any=[]
  list:any=[]
  Qset:any=[]
  ngOnInit(): void {
    this.quesService.get_result().subscribe(resultData=>{
      this.Result_Data=(resultData)
      this.list=Object.values(this.Result_Data)
      length=Object.keys(this.Result_Data).length
      for(let i=1;i<=length;i++){
        // console.log("Paper"+String(i),this.Result_Data['paper'+String(i)])
        this.Qset[i]=this.Result_Data['stud'+String(i)]
      }
  })
  }
}