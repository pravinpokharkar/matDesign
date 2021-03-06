import { Component, OnInit } from '@angular/core';
import { ClsSendService } from './cls-send.service';
import { TimerService } from './timer.service';
import { body1 } from './body-data';
import { accessTokenResponse } from './postResponse'
import { RootCase } from './domainObj';
import { RootObject } from 'src/domainObj1';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cls: string = "col-lg-8 pr-0" //for left menu component 
  loading: boolean = true //for 1st APi request
  loading1: boolean = false //for 2nd APi request
  val = 200;
  size= 50;
  token: string
  rootCase: RootObject
  questionArray: Array<Object> = []
  res: accessTokenResponse

  body = {
    grant_type: 'password',
    scope: 'user',
    client_id: '4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5',
    client_secret: '908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88',
    auth_token: 'azd4jXWWLagyb9KzgfDJ'
  }



  constructor(
    private clsSendService: ClsSendService,
    private timerService: TimerService,

  ) { }

  ngOnInit() {

    this.clsSendService.receive(str => { //Changing class on  expand button
      this.cls = str;
    })

    this.timerService.getAccessToken(this.body).subscribe(
      result => {                                           //for 1st Api request 
        this.res = result as accessTokenResponse
        console.log("response from server ", this.res);

        this.loading = false;                             //for loading spinner
        this.loading1 = true
        this.token = `Bearer ${this.res.access_token}`
         console.log("this.token ", this.token);
      

    this.timerService.getCaseStudy(this.token).subscribe( 
      response => {
        this.rootCase = response as RootObject
        console.log("this.rootCase ", this.rootCase);
        this.loading1 = false;
        this.questionArray = this.rootCase.user_company_case_study.company_case_study.questions


        console.log("questionArray at app.component", this.questionArray);



      }
    )
    })



  }



}






