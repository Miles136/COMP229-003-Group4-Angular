import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { IndexModule } from './components/index.module';
import { IndexComponent } from './components/index.component';

import { SurveyModule } from './components/survey/survey.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    //SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
