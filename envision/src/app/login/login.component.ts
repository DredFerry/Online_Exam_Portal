import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { userDetails } from '../userInfo';
import { loginDetails } from '../loginInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:UntypedFormGroup

  get uid(){
    return this.loginForm.get('uid')
  }

  constructor(private fb:UntypedFormBuilder,private router:Router,private stud:UserService,private loginService:LoginService) { }
  studentData:any=[];
  ngOnInit(): void {

    this.loginForm=this.fb.group({
      uid:['',Validators.required]
      
    })

  }

  OnSubmit(user:userDetails){
    user.studSignedIn=true
    this.stud.login_request(
      this.loginForm.value
    ).subscribe()

    // this.loginService.get_login_request().subscribe(userData=>{  
    //   this.studentData=userData 

    //   if(Object.keys(this.studentData).length===0)
    //   {
    //   console.log("HI",typeof(this.studentData))
    //   alert("Enter Valid Details Or Register")
    //   this.router.navigate(['/']).then(()=>{window.location.reload();})
    //   }
    //   else
    //   {
      localStorage.setItem("studSignedIn",JSON.stringify(user.studSignedIn))
      this.router.navigate(['/']).then(()=>{window.location.reload();})
  //     }
  // })

 
  }

}
