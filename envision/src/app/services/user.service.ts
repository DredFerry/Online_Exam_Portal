import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { userDetails } from '../userInfo';
import { loginDetails } from '../loginInfo';
import { resultDetails } from '../resultInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  server_address="http://localhost:5000"

  send_post_request(data: any){
    return this.http.post(
      this.server_address+'/addStudData',
      JSON.stringify(data)
    )
  }
  get_request(){
    return this.http.get<userDetails[]>(this.server_address+'/getStudData')
  }

  get_result(){
    return this.http.get<resultDetails[]>(this.server_address+'/getResultData')
  }

  login_request(data:any){
    return this.http.post(
      this.server_address+'/loginData',JSON.stringify(data)
    )
  }
  // get_login_request(){
  //   return this.http.get<loginDetails[]>(this.server_address+'/getStudData')
  // }
}
 