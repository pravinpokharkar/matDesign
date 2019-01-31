import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  cntr: number
  counter: number=5
  counter1: number = 2246
  x: number = 0;
  mainCounter = 2330;
  subCounter = 60;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timer();
  }

  timer() {
    setInterval(() => {
      if (this.subCounter!==0) {
        this.subCounter--;
      }
    }, 1000);
    setInterval(() => {
      if (this.mainCounter !== 0 && this.subCounter == 0) {
        this.mainCounter--;
        this.subCounter = 60;
      }
    },1000 )
  }








    // this.timerService.timerObs().subscribe(
    //   number=> console.log(number),
    //   err=> console.log(err),
    //   ()=> console.log('completed')

    // )

    // this.timerService.cnt().subscribe(
    //   res=>console.log(res)

    // )




    // let counterFunction=()=>{
    //     this.counter=5;
    //   setInterval(() => {

    //   if(this.counter!==0)this.counter--;

    //   }, 1000);

    //   setTimeout(() => {

    //     if (this.counter==0)
    //     this.counter1--;
    //     this.counter=5;

    //     }, 6000);

    // }

 

    // counterFunction();
    


    //   //  setInterval(() => {
    //   //   do {this.counter1--}
    //   //     while(this.x=1); 

    //   //    }, 1000);


  }

 

