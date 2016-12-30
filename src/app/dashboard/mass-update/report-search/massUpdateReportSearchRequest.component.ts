import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Lookup } from '../../../shared/lookup/lookup';
import { MassUpdateReportSearchRequest } from './MassUpdateReportSearchRequest';
import { LookupService } from '../../../shared/lookup/lookup.service';
import {MassUpdateService} from '../massUpdate.service'


const LOOKUPS: Lookup[] = [

    {

        "id": 1,

        "code": "BIASSOCA",

        "orderSeq": 0,

        "status": "A",

        "description": "BusinessInfo Association Add",

        "owner": "T5_MASS_UPD_TYP",

        "beginDate": null,

        "endDate": null,

        "translations": null,

        "idAsInteger": 1,

        "idAsString": "1",

        "auxCols": [

            {

                "name": "APRV_USR",

                "value": "ixkraje,sxfarr1"

            },

            {

                "name": "AREA_CDE",

                "value": "BI"

            },

            {

                "name": "APRV_REQ_FLG",

                "value": "Y"

            },

            {

                "name": "FLD_1_VAL_CDE",

                "value": "ASSOC_CDE"

            },

            {

                "name": "FLD_2_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_3_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_4_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_5_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_5_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_4_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_3_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_2_NM_TXT",

                "value": null

            },

            {

                "name": "INFO_TXT",

                "value": "Adding AssociationCode. Use numeric code."

            },

            {

                "name": "FLD_1_NM_TXT",

                "value": "AssociationCode, sample: 80191"

            }

        ]

    },

    {

        "id": 2,

        "code": "BIASSOCD",

        "orderSeq": null,

        "status": null,

        "description": "BusinessInfo Association Delete",

        "owner": "T5_MASS_UPD_TYP",

        "beginDate": null,

        "endDate": null,

        "translations": null,

        "idAsInteger": 2,

        "idAsString": "2",

        "auxCols": [

            {

                "name": "APRV_USR",

                "value": "ixkraje"

            },

            {

                "name": "AREA_CDE",

                "value": "BI"

            },

            {

                "name": "APRV_REQ_FLG",

                "value": "Y"

            },

            {

                "name": "FLD_1_VAL_CDE",

                "value": "ASSOC_CDE"

            },

            {

                "name": "FLD_2_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_3_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_4_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_5_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_5_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_4_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_3_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_2_NM_TXT",

                "value": null

            },

            {

                "name": "INFO_TXT",

                "value": "Deleting AssociationCode. Use numeric code"

            },

            {

                "name": "FLD_1_NM_TXT",

                "value": "AssociationCode, sample:80191"

            }

        ]

    },

    {

        "id": 3,

        "code": "BIRELMGU",

        "orderSeq": null,

        "status": null,

        "description": "BusinessInfo ReleaseManager+Date Update",

        "owner": "T5_MASS_UPD_TYP",

        "beginDate": null,

        "endDate": null,

        "translations": null,

        "idAsInteger": 3,

        "idAsString": "3",

        "auxCols": [

            {

                "name": "APRV_USR",

                "value": "ixkraje"

            },

            {

                "name": "AREA_CDE",

                "value": "BI"

            },

            {

                "name": "APRV_REQ_FLG",

                "value": "Y"

            },

            {

                "name": "FLD_1_VAL_CDE",

                "value": "SLS_REP"

            },

            {

                "name": "FLD_2_VAL_CDE",

                "value": "DATE"

            },

            {

                "name": "FLD_3_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_4_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_5_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_5_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_4_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_3_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_2_NM_TXT",

                "value": "RelationshipAccountTransferDate, sample: 2015-01-31"

            },

            {

                "name": "INFO_TXT",

                "value": "Updating Release Manager and Date. Use SalesRepCode value"

            },

            {

                "name": "FLD_1_NM_TXT",

                "value": "RelatinshipManager, sample: 99999"

            }

        ]

    },

    {

        "id": 4,

        "code": "SEPBBATU",

        "orderSeq": null,

        "status": null,

        "description": "Settlement PayByBatch Update",

        "owner": "T5_MASS_UPD_TYP",

        "beginDate": null,

        "endDate": null,

        "translations": null,

        "idAsInteger": 4,

        "idAsString": "4",

        "auxCols": [

            {

                "name": "APRV_USR",

                "value": "ixkraje"

            },

            {

                "name": "AREA_CDE",

                "value": "SE"

            },

            {

                "name": "APRV_REQ_FLG",

                "value": "Y"

            },

            {

                "name": "FLD_1_VAL_CDE",

                "value": "YESNOANSWER"

            },

            {

                "name": "FLD_2_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_3_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_4_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_5_VAL_CDE",

                "value": null

            },

            {

                "name": "FLD_5_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_4_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_3_NM_TXT",

                "value": null

            },

            {

                "name": "FLD_2_NM_TXT",

                "value": null

            },

            {

                "name": "INFO_TXT",

                "value": "Updating PayByBatch. Use Y/N values"

            },

            {

                "name": "FLD_1_NM_TXT",

                "value": "PayByBatch, sample: Y"

            }

        ]

    }

]
;






@Component({

  selector: 'mass-update-report-search-request',
  templateUrl: './mass-update-report-search-request.component.html'
})

export class MassUpdateReportSearchRequestComponent implements OnInit {

  model: MassUpdateReportSearchRequest;
  massUpdateTypeOptions = LOOKUPS;
  



  constructor(private _lookupService: LookupService, private _massUpdateService:MassUpdateService) {

  }



  ngOnInit() {
    this.model = new MassUpdateReportSearchRequest();
    this.model.changeTypeCode = '';
    this.model.statusCode = '';
    this.model.dateFrom = new Date(Date.now() - 86400000*7).toISOString().substring(0, 10);
    this.model.dateTo = new Date().toISOString().substring(0, 10);
   

  }


  onSubmit() {
    console.log(this.model);

     this._massUpdateService.massUpdateSearchRequest(this.model).subscribe(
       data => {
         console.log("respondedddddddddd "+ data);
      
         return true;
       },
       error => {
         console.error("Error saving modelllllllll " + error);
         return Observable.throw(error);
       }
    );

  }
}

