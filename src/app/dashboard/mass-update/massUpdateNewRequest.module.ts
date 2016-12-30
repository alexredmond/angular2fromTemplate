import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { LookupService } from '../../shared/lookup/lookup.service'; 
import { MassUpdateService } from './massUpdate.service';  
import { Config } from '../../resources/config';



import { MassUpdateNewRequestComponent } from './new-request/massUpdateNewRequest.component';
import { MassUpdateReportSearchRequestComponent } from './report-search/massUpdateReportSearchRequest.component';
 
@NgModule({
  imports: [    BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [MassUpdateNewRequestComponent, MassUpdateReportSearchRequestComponent],
  exports: [MassUpdateNewRequestComponent, MassUpdateReportSearchRequestComponent],
  providers: [LookupService, MassUpdateService, Config],
})

export class MassUpdateNewRequestModule { }




