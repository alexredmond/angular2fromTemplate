import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MassUpdateNewRequestComponent } from './massUpdateNewRequest.component';

@NgModule({
   imports: [
    BrowserModule  ],
    declarations: [MassUpdateNewRequestComponent],
    exports: [MassUpdateNewRequestComponent]
})

export class MassUpdateNewRequestModule { }
