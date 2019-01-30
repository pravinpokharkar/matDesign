import { Component } from '@angular/core';
import { ClsSendService } from './cls-send.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casestudy';

  cls: string= "col-lg-8"
constructor(
  private clsSendService: ClsSendService
){

}


ngOnInit(){
  this.clsSendService.receive(str=>{
    this.cls=str;
  })
}

}
