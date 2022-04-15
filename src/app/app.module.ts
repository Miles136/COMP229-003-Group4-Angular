import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { IndexModule } from './components/index.module';
import { IndexComponent } from './components/index.component';

import { SurveyModule } from './components/survey/survey.module';
import { ListComponent } from './components/survey/list.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    SurveyModule,
    RouterModule.forRoot([
      {path: "", component: IndexComponent },
      {path: "inventory/list", component: ListComponent },
      {path: "*", redirectTo: "" },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
