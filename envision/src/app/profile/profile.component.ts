import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { userDetails } from '../userInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private userService:UserService) { }
  username=localStorage.getItem("username")
  phoneNumber=localStorage.getItem("phoneNumber")
  email=localStorage.getItem("email")
  university=localStorage.getItem("university")
  college=localStorage.getItem("college")
  stream=localStorage.getItem("stream")
  academicYear=localStorage.getItem("academicYear")
  address=localStorage.getItem("address")
  uid=localStorage.getItem("uid")
  // image=localStorage.getItem("image")
  studentData:any=[];
  studentCode=""
  firstName=""
  lastName=""
  
  ngOnInit(): void {
    
  //  let  userData=this.userService.get_request...since its an object from observable..we used ssubscribe and fat arrow function to assign the object in userData variable

    this.userService.get_request().subscribe(userData=>{  
      this.studentData=userData  //stroing the object in an array of dataType "any"   
      // console.log(this.studentData.username)

      localStorage.setItem("username",this.studentData.username)
      localStorage.setItem("uid",this.studentData.uid)
      localStorage.setItem("email",this.studentData.email)
      localStorage.setItem("phoneNumber",this.studentData.phoneNumber)
      localStorage.setItem("address",this.studentData.address)
      localStorage.setItem("college",this.studentData.college)
      localStorage.setItem("university",this.studentData.university)
      localStorage.setItem("stream",this.studentData.stream)
      localStorage.setItem("academicYear",this.studentData.academicYear)
      // localStorage.setItem("image",this.studentData.image)




      this.username=localStorage.getItem("username")
      this.phoneNumber=localStorage.getItem("phoneNumber")
      this.email=localStorage.getItem("email")
      this.university=localStorage.getItem("university")
      this.college=localStorage.getItem("college")
      this.stream=localStorage.getItem("stream")
      this.academicYear=localStorage.getItem("academicYear")
      this.address=localStorage.getItem("address")
      this.uid=localStorage.getItem("uid")
      // this.image=localStorage.getItem("image")
      
    })
    this.firstName=this.username!.substr(0,2)
    this.lastName=this.username!.substr(-2,2)
    this.studentCode=(this.firstName+this.lastName).toUpperCase()+this.uid
    console.log(this.studentCode)
  } 
   

}
