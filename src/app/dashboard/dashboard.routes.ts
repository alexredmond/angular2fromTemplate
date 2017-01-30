import { Route } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { ChartRoutes } from './charts/chart.route';
import { BlankPageRoutes } from './blank-page/blankPage.routes';
import { TableRoutes } from './tables/table.routes';
import { FormRoutes } from './forms/forms.routes';
import { GridRoutes } from './grid/grid.routes';
import { BSComponentRoutes } from './bs-component/bsComponent.routes';
import { BSElementRoutes } from './bs-element/bsElement.routes';

import { MassUpdateNewRequestRoutes } from './mass-update/massUpdateNewRequest.routes'; 

import { DashboardComponent } from './index';
import { AuthorizationGuard } from '../login/authorization.guard'; 

export const DashboardRoutes: Route[] = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        ...MassUpdateNewRequestRoutes,
        ...HomeRoutes,
        ...ChartRoutes,
        ...BSComponentRoutes,
        ...TableRoutes,
        ...BlankPageRoutes,
        ...FormRoutes,
        ...GridRoutes,
        ...BSElementRoutes
      ],
      canActivate: [AuthorizationGuard] 
    }
    
];
