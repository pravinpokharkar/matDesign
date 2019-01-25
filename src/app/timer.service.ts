import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {interval} from 'rxjs';
import { Time } from '@angular/common';




@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { 
    
    
  }

  //  cnt(){
  //    let counter=60;
  //     setInterval(() => {
  //    return counter--; 
  //     }, 5000);
    
    // return Observable.interval(1000).set(
    //   counter=>counter--)
   }

   

  

  // timerObs(){
  //   return Observable.create(
  //     res=>{
  //       for (let i=10; i>=0;i--)
  //       {
  //       res.next(i)
  //       }
  //     res.complete()
  //   }
    // )

  // }
// }

 


