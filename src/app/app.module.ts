import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetUsersComponent } from './get-users/get-users.component';
import { AlertModule } from 'ngx-bootstrap';
import { SubuComponent } from './subu/subu.component';
import { SubuChildComponent } from './subu-child/subu-child.component';
import { FormComponent } from './form/form.component';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    GetUsersComponent,
    SubuComponent,
    SubuChildComponent,
    FormComponent,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
