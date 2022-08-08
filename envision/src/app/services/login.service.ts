import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { loginDetails } from '../loginInfo';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  server_address="http://localhost:5000"

  get_login_request(){
    return this.http.get<loginDetails[]>(this.server_address+'/getStudData')
  }
}
