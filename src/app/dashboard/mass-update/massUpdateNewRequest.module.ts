import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { LookupService } from '../../shared/lookup/lookup.service'; 
import { MassUpdateService } from './massUpdate.service';  
import { Config } from '../../shared/properties/config';
import { UtilService } from '../../shared/utils/util.service';
import { RouterModule, Routes } from '@angular/router';




import { MassUpdateNewRequestComponent } from './new-request/massUpdateNewRequest.component';
import { MassUpdateReportSearchRequestComponent } from './report-search/massUpdateReportSearchRequest.component';
import { MassUpdateReportSearchResultListComponent } from './report-search/massUpdateReportSearchResultList.component';
import { MassUpdateReportDetailComponent } from './report-detail/massUpdateReportDetail.component';
  
@NgModule({
  imports: [    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [MassUpdateNewRequestComponent, MassUpdateReportSearchRequestComponent,MassUpdateReportSearchResultListComponent,MassUpdateReportDetailComponent],
  exports: [MassUpdateNewRequestComponent, MassUpdateReportSearchRequestComponent,MassUpdateReportSearchResultListComponent,MassUpdateReportDetailComponent],
  providers: [LookupService, MassUpdateService, Config, UtilService], 
})

export class MassUpdateNewRequestModule { }




