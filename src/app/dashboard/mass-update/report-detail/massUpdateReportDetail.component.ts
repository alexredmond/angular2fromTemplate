import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

import { Lookup } from '../../../shared/lookup/lookup';
import { LookupService } from '../../../shared/lookup/lookup.service';
import { MassUpdateService } from '../massUpdate.service';
import { AlertService } from '../../../shared/alert/alert.service';
import { MassUpdateReportDetail } from './massUpdateReportDetail';




@Component({

  selector: 'mass-update-report-details',
  templateUrl: './mass-update-report-detail.component.html'
})

export class MassUpdateReportDetailComponent implements OnInit {

  model: MassUpdateReportDetail;
  massUpdateTypeOptions: Lookup[];
  massUpdateRequestStatusOptions: Lookup[];
  // resultList: MassUpdateReportSearchRecord[];
  resultCount: number;

  private sub: Subscription;



  constructor(private _lookupService: LookupService,
    private _massUpdateService: MassUpdateService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router) {
  }




  ngOnInit() {
    this.model = new MassUpdateReportDetail();

    this.sub = this.route.params.subscribe(
      params => {
        let requestId = params['requestId'];
        console.log('invooking init' + requestId);

        if (isNaN(requestId)) {
          this.alertService.error('Incorrect requestId value');
          return;
        }

        if (!parseInt(requestId)) {
          this.alertService.error('Incorrect requestId number');
          return;
        }

        this._massUpdateService.massUpdateReportDetails(requestId)
          .subscribe(
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
              this.model.requestId = responseBody.requestId;
            }
          },
          error => {
            this.alertService.error('Problem searching MassUpdateReportDetails. ' + error);
          }
          );
      });

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}

