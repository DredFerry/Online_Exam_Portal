import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-exam-home-page',
  templateUrl: './exam-home-page.component.html',
  styleUrls: ['./exam-home-page.component.css']
})
export class ExamHomePageComponent implements OnInit {

  constructor(private userService:UserService) { }
  QR_value=0
  qr_window_active=false
  studentData:any=[];
  studentId="";
  studentName="";
  firstName="";
  lastName="";
  studentCode=""
  ngOnInit(): void {
    this.userService.get_request().subscribe(userData=>{  
      this.studentData=userData
      this.studentId=this.studentData.uid
      this.studentName=this.studentData.username
      this.firstName=this.studentName.substr(0,2)
      this.lastName=this.studentName.substr(-2,2)
      this.studentName=(this.firstName+this.lastName).toUpperCase()
      this.studentCode=this.studentName+this.studentId
      console.log(this.studentCode)
      
    })

  }

  QRFUNC(){
    if(this.qr_window_active==false){
   document.getElementById("QR_window")!.style.display="block"
   this.qr_window_active=true
    
   console.log(this.studentId) 


  }
  else{
    document.getElementById("QR_window")!.style.display="none";
    this.qr_window_active=false;
    (<HTMLInputElement>document.getElementById("startButton")).disabled=true;
    // this.output=""
    
    }

  }

  validityCheck(output:any){
    console.log("studId=",this.studentId)
    console.log("out=",output)
     if(output==this.studentCode && output!==""){
      // (<HTMLInputElement>document.getElementById("startButton")).disabled=false
      this.QR_value=1
      document.getElementById("outputValid")!.style.display="inline"
    }
    else if(output!=this.studentCode && output!==""){
      document.getElementById("outputInvalid")!.style.display="inline"
      document.getElementById("outputValid")!.style.display="none"
    }
    this.verified()
  }

  verified(){
    if(this.QR_value==1){
      
  (<HTMLInputElement>document.getElementById("startButton")).disabled=false
  document.getElementById("outputInvalid")!.style.display="none"
      document.getElementById("QR")!.style.backgroundColor="green"
    }
  }
}

