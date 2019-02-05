import { Component } from '@angular/core';
import { ClsSendService } from './cls-send.service';
import { TimerService } from './timer.service';
import { body1 } from './body-data';
import {accessTokenResponse} from './postResponse'
import { RootCase } from './domainObj';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

res: accessTokenResponse  //response of post data for access token
  title = 'casestudy';
 showCase: boolean;
  cls: string= "col-lg-8 pr-0"
  rootCase: RootCase
  token: string
  
body={ 
  grant_type:'password',
scope:'user',
client_id:'4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5',
client_secret:'908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88',
auth_token:'azd4jXWWLagyb9KzgfDJ'
}

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

  

start(){
  this.timerService.getAccessToken(this.body).subscribe(
    result => 
    {this.res= result as accessTokenResponse
    // console.log(this.res)
    this.token= `Bearer ${this.res.access_token}`
  console.log(this.token)
   this.timerService.getCaseStudy(this.token).subscribe(
     response=>{
       this.rootCase=response as RootCase
       console.log(this.rootCase)
     }
   )
  }
)

}

}






