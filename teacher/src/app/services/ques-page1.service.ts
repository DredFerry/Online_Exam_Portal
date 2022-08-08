import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { resultDetails } from '../resultInfo';


@Injectable({
  providedIn: 'root'
})
export class QuesPage1Service {

  constructor(private http:HttpClient) { }

  server_address="http://localhost:5000"

  send_post_request(data: any){
    return this.http.post(
      this.server_address+'/addQues',
      JSON.stringify(data)
    )
  }

  send_code(data:any){
    return this.http.post(
      this.server_address+'/paperCode',
      JSON.stringify(data)
    )
  }

  get_result(){
    return this.http.get<resultDetails[]>(this.server_address+'/getResultTPortal')
  }


}

