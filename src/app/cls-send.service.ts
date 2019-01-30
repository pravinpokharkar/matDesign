import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClsSendService {

  em: EventEmitter<any>= new EventEmitter;
  constructor() { }


  send(str: string){
    this.em.emit(str)
  }

  receive(onRc: (str:string)=>void){
    this.em.subscribe(str=> onRc(str))
  }
}
