import { Component, OnInit, EventEmitter, ElementRef, ViewChild, Output, Input } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { ClsSendService } from '../cls-send.service';
import { TimerService } from '../timer.service';
import { accessTokenResponse } from '../postResponse';
import { RootObject } from 'src/domainObj1';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material';





@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {


  @Input()
  qData;

  loading: boolean
  finalQ: Array<Object>
  questionArray: any
  xyz: RootObject
  clas: string;
  

  expansionStatus: boolean = false; //when not clicked on expansion button of left menu

  constructor(
    private clsSendService: ClsSendService,
    private timerService: TimerService,
    public dialog: MatDialog
  ) { }



 

  ngOnInit() {

    this.clsSendService.receive(star => {   //receiving status of expansion button
      this.clas = star
      if (this.clas == 'col-lg-12 padding-0')
        this.expansionStatus = true;
      else
        this.expansionStatus = false;
    })

  }
  ngOnChanges() {
    if (this.qData)
      console.log(this.qData)
    this.xyz = this.qData as RootObject
    this.questionArray = this.xyz.user_company_case_study.company_case_study.questions
    console.log("  this.questionArray ", this.questionArray);
  }


  fire(event) {
    setTimeout(() => event.target.scrollIntoView({ behaviour: 'smooth' }), 500);
  }



  openDialog(): void {     //for popup on submit button
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '450px'
    }
    );
  }





}
