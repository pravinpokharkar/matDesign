import { Component, OnInit, EventEmitter, ElementRef, ViewChild, Output } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { ClsSendService } from '../cls-send.service';
import { TimerService } from '../timer.service';
import { accessTokenResponse } from '../postResponse';
import { RootObject } from 'src/domainObj1';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  question = []


  // customCollapsedHeight: string = '190px';
  // customExpandedHeight: string = '190px';


  // dummy1: string;
  questionArray = []
  ArrLength: number;
  clas: string;
  // bttn1: string = 'save';
  // bttn2: string = 'save';
  // bttn3: string = 'save';
  // bttn4: string = 'save';
  // bttn5: string = 'save';
  expansionStatus: boolean = false; //when not clicked on expansion button of left menu
  //  @ViewChild('qul')
  //   qul: ElementRef


  res: accessTokenResponse  //response of post data for access token
  // title = 'casestudy';
  //  showCase: boolean;
  token: string
  rootCase: RootObject

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


  // @Output() 
  // onContentChanged: EventEmitter<any> = new EventEmitter()

  // textChanged1(event1) {
  //   if (event1.html !== null)
  //     this.bttn1 = 'Update';
  //   else
  //     this.bttn1 = 'save'
  // }
  // textChanged2(event2) {
  //   if (event2.html !== null)
  //     this.bttn2 = 'Update';
  //   else
  //     this.bttn2 = 'save'
  // }

  // textChanged3(event3) {
  //   if (event3.html !== null)
  //     this.bttn3 = 'Update';
  //   else
  //     this.bttn3 = 'save'
  // }

  // textChanged4(event4) {
  //   if (event4.html !== null)
  //     this.bttn4 = 'Update';
  //   else
  //     this.bttn4 = 'save'
  // }

  // textChanged5(event5) {
  //   if (event5.html !== null)
  //     this.bttn5 = 'Update';
  //   else
  //     this.bttn5 = 'save'
  // }

  //   onClickedEvent(){
  // this.dummy1="location.hash = '#dummy12'"
  //   }

  ngOnInit() {
    


    this.clsSendService.receive(star => {   //receiving status of expansion button
      this.clas = star
      if (this.clas == 'col-lg-12 padding-0')
        this.expansionStatus = true;
      else
        this.expansionStatus = false;

    })

  }


  fire(event) {
    setTimeout(() => event.target.scrollIntoView(), 1000);
  }


  start(){
    this.timerService.getAccessToken(this.body).subscribe(
      result => {
        this.res = result as accessTokenResponse
        console.log(this.res)
        this.token = `Bearer ${this.res.access_token}`
        console.log(this.token)
        this.timerService.getCaseStudy(this.token).subscribe(
          response => {
            this.rootCase = response as RootObject
            console.log(this.rootCase)
            this.questionArray = this.rootCase.user_company_case_study.company_case_study.questions
            console.log("questionArray ", this.questionArray);
            console.log(this.rootCase.user_company_case_study.company_case_study.questions)
            this.ArrLength = this.questionArray.length
          }
        )
      }
    )
  }

}
