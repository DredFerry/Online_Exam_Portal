import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private userService:UserService) { }
  Student_Name=localStorage.getItem("username")
  Student_Uid=localStorage.getItem("uid")
  Result_Data:any=[]
  PaperSet:any
  list:any=[]
  Qset:any=[]
  ngOnInit(): void {
    this.userService.get_result().subscribe(resultData=>{
      this.Result_Data=(resultData)
      this.list=Object.values(this.Result_Data)
      length=Object.keys(this.Result_Data).length
      for(let i=1;i<=length;i++){
        // console.log("Paper"+String(i),this.Result_Data['paper'+String(i)])
        this.Qset[i]=this.Result_Data['paper'+String(i)]
      }
      console.log(typeof(this.Qset))
      for(let i=1;i<=length;i++){
      console.log(this.Qset[i].Student_Name)
      localStorage.setItem("Student_Name",this.Qset[i].Student_Name)
      localStorage.setItem("Student_Uid",this.Qset[i].Stud_uid)
    }
    })
    // this.Student_Name=localStorage.getItem("usename")
    // this.Student_Uid=localStorage.getItem("UID")
  }

}
