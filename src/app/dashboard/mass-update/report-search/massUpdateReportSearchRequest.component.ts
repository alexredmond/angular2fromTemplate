import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { Lookup } from '../../../shared/lookup/lookup';
import { MassUpdateReportSearchRequest } from './MassUpdateReportSearchRequest';
import { LookupService } from '../../../shared/lookup/lookup.service';
import { MassUpdateService } from '../massUpdate.service'
import { AlertService } from '../../../shared/alert/alert.service'
import { MassUpdateReportSearchRecord } from './massUpdateReportSearchRecord'




@Component({

  selector: 'mass-update-report-search-request',
  templateUrl: './mass-update-report-search-request.component.html'
})

export class MassUpdateReportSearchRequestComponent implements OnInit {

  model: MassUpdateReportSearchRequest;
  massUpdateTypeOptions: Lookup[];
  massUpdateRequestStatusOptions: Lookup[];
  resultList: MassUpdateReportSearchRecord[];
  resultCount: number;


  constructor(private _lookupService: LookupService,
    private _massUpdateService: MassUpdateService,
    private alertService: AlertService) {
    console.log('invooking constructor');
  }



  ngOnInit() {
    console.log('invooking init');
    this.model = new MassUpdateReportSearchRequest();
    this.defaultForm();

    this._lookupService.getLookup('T5_MASS_UPD_TYP')
      .subscribe(result => this.massUpdateTypeOptions = result,
      error =>  this.alertService.error('Problem loading screen. ' + error));

    this._lookupService.getLookup('T5_MASS_UPD_STAT_CDE')
      .subscribe(result => this.massUpdateRequestStatusOptions = result,
      error =>  this.alertService.error('Problem loading screen. ' + error));
  }

  defaultForm(){
    this.resultList = null;
    this.model.dateFrom = new Date(Date.now() - 86400000 * 7).toISOString().substring(0, 10);
    this.model.dateTo = new Date().toISOString().substring(0, 10);
    this.model.requestId = null;
    this.model.requestorUsername = '';
    this.model.changeTypeCode = '';
    this.model.referenceNumber = '';
  }

  onSubmit2() {
    this.alertService.clear();
    console.log(this.model);
    this.resultList = null;
    this.resultCount = null;

    this._massUpdateService.massUpdateSearchRequest(this.model).subscribe(
      responseBody => {
        console.log("respondedddddddddd " + JSON.stringify(responseBody));
        if (responseBody.errorMessages) {
          this.alertService.errorList(responseBody.errorMessages);
        }
        if (responseBody.infoMessage) {
          this.alertService.success(responseBody.infoMessage);
        }

        if (responseBody.navigationStatus) {
          this.alertService.error(responseBody.navigationStatus);
        } else {
          this.resultList = responseBody.records;
          this.resultCount =  responseBody.recordsCount;
        }
      },
      error => {
        this.alertService.error('Problem searching MassUpdateReport. ' + error);
      }
    );

  }
}

