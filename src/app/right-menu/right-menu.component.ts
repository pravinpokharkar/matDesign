import { Component, OnInit, EventEmitter, ElementRef, ViewChild, Output } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  stat: any
  bttn: string= 'save';
 @ViewChild('qul')
  qul: ElementRef
  constructor() { }


@Output() 
onContentChanged: EventEmitter<any> = new EventEmitter()

textChanged($event){
  // console.log($event.html)
  this.stat= $event.html
  if(this.stat!==null)
  this.bttn='Update';
  else 
  this.bttn='save'
console.log(this.bttn)
  }


  ngOnInit() {
  }
  
}
