import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { ChartModule } from './charts/chart.module';
import { BlankPageModule } from './blank-page/blankPage.module';
import { TableModule } from './tables/table.module';
import { FormModule } from './forms/forms.module';
import { GridModule } from './grid/grid.module';
import { BSComponentModule } from './bs-component/bsComponent.module';
import { BSElementModule } from './bs-element/bsElement.module';

import { MassUpdateNewRequestModule } from './mass-update/massUpdateNewRequest.module';

import { DashboardComponent } from './dashboard.component';

import { TopNavComponent } from '../shared/index';
import { SidebarComponent } from '../shared/index';

import { AlertModule } from '../shared/alert/alert.module';




@NgModule({
  imports: [
    MassUpdateNewRequestModule,

    CommonModule,
    RouterModule,
    DropdownModule,
    HomeModule,
    ChartModule,
    TableModule,
    FormModule,
    GridModule,
    BSComponentModule,
    BSElementModule,
    BlankPageModule,
    AlertModule,
    RouterModule
  ],
  declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
  exports: [DashboardComponent, TopNavComponent, SidebarComponent, RouterModule]
})

export class DashboardModule { }
