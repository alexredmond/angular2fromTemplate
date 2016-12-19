import { Component } from '@angular/core';

import { Lookup } from '../../../shared/lookup/lookup';

const LOOKUPS: Lookup[] = [
  { code: 'BIASSOCA', description: 'BusinessInfo Association Add' },
  { code: 'BIASSOCD', description: 'BusinessInfo Association Del' },
  { code: 'BIRELMGU', description: 'RelMn update' }
];




@Component({
    selector: 'mass-update-new-request',
    templateUrl: './mass-update-new-request.component.html'
})

export class MassUpdateNewRequestComponent {
  
    massUpdateTypes = LOOKUPS;
  
  
}
