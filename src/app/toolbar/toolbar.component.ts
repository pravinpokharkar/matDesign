import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  //cntr: number
  //counter: number = 5
  //counter1: number = 2246
  x: number = 0;
  mainCounter = 2620;
  subCounter = 60;

  constructor(private timerService: TimerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.timer();
  }

  timer() {
    setInterval(() => {
      if (this.subCounter !== 0) {
        this.subCounter--;
      }
    }, 1000);
    setInterval(() => {
      if (this.mainCounter !== 0 && this.subCounter == 0) {
        this.mainCounter--;
        this.subCounter = 60;
      }

      else if (this.mainCounter == 0)
        this.router.navigate(['done'])

    }, 1000)

  }




}



