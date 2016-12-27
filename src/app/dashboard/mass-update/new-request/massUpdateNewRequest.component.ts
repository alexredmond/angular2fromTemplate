import { Component, Input, OnInit } from '@angular/core';

import { Lookup } from '../../../shared/lookup/lookup';
import { MassUpdateNewRequest } from './MassUpdateNewRequest';
import { LookupService } from '../../../shared/lookup/lookup.service';

const LOOKUPS: Lookup[] = [
  { code: 'BIASSOCA', description: 'BusinessInfo Association Add' },
  { code: 'BIASSOCD', description: 'BusinessInfo Association Del' },
  { code: 'BIRELMGU', description: 'RelMn update' }
];




@Component({

  selector: 'mass-update-new-request',
  templateUrl: './mass-update-new-request.component.html'
})

export class MassUpdateNewRequestComponent implements OnInit {

  model: MassUpdateNewRequest;
  massUpdateTypes = LOOKUPS;
  selectedMassUpdateType: Lookup;


  constructor(private _lookupService: LookupService) {

  }




  onChangemassUpdateType(massUpdateTypeCode) {
    console.log(massUpdateTypeCode);

    this.selectedMassUpdateType = this._lookupService.getLookupByCode(this.massUpdateTypes, massUpdateTypeCode);

  }


  ngOnInit() {
    this.model = new MassUpdateNewRequest('', 'myUserName');
  }


  onSubmit() {
    console.log(this.model);

  }
}

