import { Component, OnInit, EventEmitter, ElementRef, ViewChild, Output } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { ClsSendService } from '../cls-send.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  dummy1:string;

  clas: string;
  bttn1: string = 'save';
  bttn2: string = 'save';
  bttn3: string = 'save';
  bttn4: string = 'save';
  bttn5: string = 'save';
  expansionStatus: boolean = false;
  //  @ViewChild('qul')
  //   qul: ElementRef
  constructor(
    private clsSendService: ClsSendService
  ) { }


  // @Output() 
  // onContentChanged: EventEmitter<any> = new EventEmitter()

  textChanged1(event1) {
    if (event1.html !== null)
      this.bttn1 = 'Update';
    else
      this.bttn1 = 'save'
  }
  textChanged2(event2) {
    if (event2.html !== null)
      this.bttn2 = 'Update';
    else
      this.bttn2 = 'save'
  }

  textChanged3(event3) {
    if (event3.html !== null)
      this.bttn3 = 'Update';
    else
      this.bttn3 = 'save'
  }

  textChanged4(event4) {
    if (event4.html !== null)
      this.bttn4 = 'Update';
    else
      this.bttn4 = 'save'
  }

  textChanged5(event5) {
    if (event5.html !== null)
      this.bttn5 = 'Update';
    else
      this.bttn5 = 'save'
  }

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

}
