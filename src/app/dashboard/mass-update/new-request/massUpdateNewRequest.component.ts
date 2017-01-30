import { Component, Input, OnInit } from '@angular/core';

import { Lookup } from '../../../shared/lookup/lookup';
import { MassUpdateNewRequest } from './MassUpdateNewRequest';
import { LookupService } from '../../../shared/lookup/lookup.service';






@Component({

    selector: 'mass-update-new-request',
    templateUrl: './mass-update-new-request.component.html'
})

export class MassUpdateNewRequestComponent implements OnInit {

    model: MassUpdateNewRequest;
    massUpdateTypeOptions: Lookup[];
    midGroupOptions: Lookup[];
    selectedMassUpdateType: Lookup;

    errorMessage: string;

    infoText: string;
    field1placeholder: string;
    field2placeholder: string;
    field3placeholder: string;
    field4placeholder: string;
    field5placeholder: string;
    field1code: string;
    field2code: string;
    field3code: string;
    field4code: string;
    field5code: string;

    constructor(private _lookupService: LookupService) {

    }




    onChangemassUpdateType(massUpdateTypeCode) {
        console.log(massUpdateTypeCode);
        this.selectedMassUpdateType = this._lookupService.getLookupByCode(this.massUpdateTypeOptions, massUpdateTypeCode);
        this.model.approverUsernames = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'APRV_USR');
        this.field1placeholder = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_1_NM_TXT');
        this.field2placeholder = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_2_NM_TXT');
        this.field3placeholder = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_3_NM_TXT');
        this.field4placeholder = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_4_NM_TXT');
        this.field5placeholder = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_5_NM_TXT');
        this.field1code = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_1_VAL_CDE');
        this.field2code = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_2_VAL_CDE');
        this.field3code = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_3_VAL_CDE');
        this.field4code = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_4_VAL_CDE');
        this.field5code = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'FLD_5_VAL_CDE');
        this.infoText = this._lookupService.getLookupAuxColValue(this.selectedMassUpdateType, 'INFO_TXT');
    }


    ngOnInit() {
        this.model = new MassUpdateNewRequest('', localStorage.getItem('currentUserName'));
        this.model.midGroup = 'EU';
        this.model.midList = '';
        this.field1placeholder = '';
        this.field2placeholder = '';
        this.field3placeholder = '';
        this.field4placeholder = '';
        this.field5placeholder = '';
        this.infoText = '';


        this._lookupService.getLookup('T5_MASS_UPD_TYP')
            .subscribe(options => this.massUpdateTypeOptions = options,
            error => this.errorMessage = <any>error);

        this._lookupService.getLookup('T5_PRCS_CNTR')
            .subscribe(options => this.midGroupOptions = options,
            error => this.errorMessage = <any>error);
    }


    onSubmit() {
        console.log(this.model);

    }
}

