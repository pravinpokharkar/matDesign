import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  private fragment:string;
  constructor(private route:ActivatedRoute) { }
  
stat:boolean=false;

classChange(){
  this.stat= !this.stat;
  console.log(this.stat)
}



  ngOnInit() {
    this.route.fragment.subscribe(fragment=>{this.fragment=fragment})
  }

  ngAfterViewInit():void{
   try{
     document.querySelector('#'+ this.fragment).scrollIntoView();
   } catch(e){}
  }

}
