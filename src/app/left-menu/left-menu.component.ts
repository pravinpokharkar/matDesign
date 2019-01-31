import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClsSendService } from '../cls-send.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  

 
  constructor(
    private clsSendService: ClsSendService 
  ) { }
  
stat:boolean=false;


classChange(){
  this.stat= !this.stat;
  console.log(this.stat)
  if(this.stat)
  
  this.clsSendService.send('col-lg-12');
  else
  this.clsSendService.send('col-lg-8')
}



  ngOnInit() {
    
  }

 

}
