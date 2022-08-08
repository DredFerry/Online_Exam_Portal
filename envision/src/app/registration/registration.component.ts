import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup,UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../services/user.service';
import { userDetails } from '../userInfo';


const routes:Routes=[
  {path:"",component:HomeComponent}
]

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  
  registrationForm!:UntypedFormGroup;



  get username(){
    return this.registrationForm.get('username');
  }
  get phoneNumber(){
    return this.registrationForm.get('phoneNumber');
  }
  
  get email(){
    return this.registrationForm.get('email');
  }
  
  get university(){
    return this.registrationForm.get('university');
  }
  
  get college(){
    return this.registrationForm.get('college');
  }
  
  get stream(){
    return this.registrationForm.get('stream');
  }
  
  get academicYear(){
    return this.registrationForm.get('academicYear');
  }
  
  get uid(){
    return this.registrationForm.get('uid');
  }
  get address(){
    return this.registrationForm.get('address');
  }
  get image(){
    return this.registrationForm.get('image');
  }
  
  active=false;

  constructor(private fb:UntypedFormBuilder ,private router:Router,  private stud:UserService
    ) { }
  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      phoneNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[789][0-9]{9}')]],
      email:['',Validators.required],
      university:[''],
      college:['',Validators.required],
      stream:[''],
      academicYear:['',Validators.required],
      uid:['',Validators.required],
      address:['',Validators.required],
      // image:[''],
     studSignedIn:['true']
    })
  }
OnSubmit(user:userDetails){
  user.studSignedIn=true
  this.active=true
  console.log(typeof(this.registrationForm.value))
  console.log("studSignedIn");


this.stud.send_post_request(
  this.registrationForm.value

).subscribe()




  this.router.navigate(['/login'])//Navigates and reloads the home page
//else studSignedIn value was not updating in homePage
}
}
