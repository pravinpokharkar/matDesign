import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {interval} from 'rxjs';

import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(
     private http: HttpClient
  ) { 
   }

 
 getAccessToken(data:any): Observable<Object>{
   
   return this.http.post('https://simulationapi.ur-nl.com/oauth/token.json',data,{
    headers: {
      'Content-Type':'application/json'
    }
   })
 }

 getCaseStudy(accToken):Observable<Object>{
   console.log(accToken)
   
   return this.http.get('https://simulationapi.ur-nl.com/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions',{
   headers:{
    'Authorization': `${accToken}`,
    'Content-Type':'application/json'
   }
  })
 }

//  private handleError(error: any) {
//   let errMsg = (error.message) ? error.message :
//       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//   console.error(errMsg);
//   return Observable.throw(errMsg);
// }




   }

   

  

 
 


