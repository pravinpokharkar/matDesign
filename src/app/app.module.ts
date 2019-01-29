import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CountdownModule } from 'ngx-countdown';
import { TimerService } from './timer.service';
import { TestComponent } from './test/test.component';
import { QuillModule } from 'ngx-quill'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { RouterModule, ExtraOptions } from '@angular/router';
// import { NgxPageScrollModule } from 'ngx-page-scroll';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

RouterModule.forRoot( [],{useHash:true})

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LeftMenuComponent,
    RightMenuComponent,
    TestComponent,
    // NgxPageScrollModule
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CountdownModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    CommonModule,
    PerfectScrollbarModule,
    
  ],
  providers: [TimerService,{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
