import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JobVacancyComponent} from './job-vacancy/job-vacancy.component';
import { AppComponent }  from './app.component';
import {ApiService} from './shared/api.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, JobVacancyComponent],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
