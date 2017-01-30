import { Route } from '@angular/router';

import { MassUpdateNewRequestComponent } from './index';
import { MassUpdateReportSearchRequestComponent } from './index';
import { MassUpdateReportDetailComponent } from './index';

export const MassUpdateNewRequestRoutes: Route[] = [
  {
    path: 'massupdate/new',
    component: MassUpdateNewRequestComponent
  },
  {
    path: 'massupdate/report',
    component: MassUpdateReportSearchRequestComponent
  },
  {
    path: 'massupdate/report/:requestId',
    component: MassUpdateReportDetailComponent
  } 
]; 