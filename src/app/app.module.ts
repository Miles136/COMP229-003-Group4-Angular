import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { IndexModule } from './components/index.module';
import { IndexComponent } from './components/index.component';

import { SurveyModule } from './components/survey/survey.module';
import { ListComponent } from './components/survey/list.component';
import { AuthModule } from './components/auth/auth.module';
import { SignInComponent } from './components/auth/signin.component';
import { SignUpComponent } from './components/auth/signup.component';
import { AddEditComponent } from './components/survey/add_edit.component';
import { AuthGuard } from './components/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IndexModule,
    SurveyModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "survey/list", component: ListComponent },
      { path: "survey/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      // { path: "survey/edit", component: AddEditComponent, canActivate: [AuthGuard]},
      // { path: "survey/add", component: AddEditComponent, canActivate: [AuthGuard]},
      // { path: "survey/edit/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      // { path: "survey/add/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "users/signup", component: SignUpComponent },
      { path: "users/signin", component: SignInComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
