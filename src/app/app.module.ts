import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddEmployeeComponent} from './app.addemployee.'
import {ShowEmployeeComponent} from './app.showemployee'
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpClientModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,ShowEmployeeComponent,
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }