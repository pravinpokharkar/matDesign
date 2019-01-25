import { Component, OnInit } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  constructor() { }

  // problems=[
  //   {id:1, index:'1.', name:'What do you think about the launching of a new brand of chocolate bars mentioned in the case?'},
  //   {id:2, index:'2.',name:'Based on the information above, what will be your overall strategy to ensure an effective product launch? '},
  //   {id:3, index:'3.', name:'Outline an implementation plan of the major project steps you envisage'},
  //   {id:4, index:'4.', name:'Please provide an indication of the key tasks, departments and stakeholders that would be involved at each step. How will you ensure that everyone is on the same page and expectations of each are adequately met?'},
  //   {id:5, index:'5.', name:'Are there any difficulties/challenges/risks that might arise? If yes, what are they and how you intend to resolve those?'},
  // ]

  ngOnInit() {
  }



 
  
}
