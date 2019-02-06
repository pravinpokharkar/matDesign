import { Component } from '@angular/core';
import { ClsSendService } from './cls-send.service';
import { TimerService } from './timer.service';
import { body1 } from './body-data';
import {accessTokenResponse} from './postResponse'
import { RootCase } from './domainObj';
import { RootObject } from 'src/domainObj1';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cls: string= "col-lg-8 pr-0"

constructor(
  private clsSendService: ClsSendService,
  private timerService:TimerService,
  // private body: body1
){}

ngOnInit(){
  this.clsSendService.receive(str=>{
    this.cls=str;
    console.log(str)

  })
  }

  



}






