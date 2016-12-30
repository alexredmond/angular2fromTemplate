import { Route } from '@angular/router';

import { MassUpdateNewRequestComponent } from './index';
import { MassUpdateReportSearchRequestComponent } from './index';

export const MassUpdateNewRequestRoutes: Route[] = [
  {
    path: 'mass-update-new-request',
    component: MassUpdateNewRequestComponent
  },
  {
    path: 'mass-update-report-search-request',
    component: MassUpdateReportSearchRequestComponent
  }
];
