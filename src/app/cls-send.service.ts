import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClsSendService {

  em: EventEmitter<any>= new EventEmitter;
  emt: EventEmitter<any>=new EventEmitter
  constructor() { }


  send(str: string){
    this.em.emit(str)
  }

  receive(onRc: (str:string)=>void){
    this.em.subscribe(str=> onRc(str))
  }

  sendStatus(loading:boolean){
this.emt.emit(loading)
 console.log("loading status at send service ", loading);

  }

  rxStatus(onRx:(loading:boolean)=>void){
    this.emt.subscribe(loading=> onRx(loading))
    
  }

  // chatObs(){
  //   Observable.create{
  //     this.loaderData=
  //   }
  // }

  


}
