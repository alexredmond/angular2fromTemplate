import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { LookupService } from '../../../shared/lookup/lookup.service';


import { MassUpdateNewRequestComponent } from './massUpdateNewRequest.component';

@NgModule({
  imports: [    BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [MassUpdateNewRequestComponent],
  exports: [MassUpdateNewRequestComponent],
  providers: [LookupService],
})

export class MassUpdateNewRequestModule { }




