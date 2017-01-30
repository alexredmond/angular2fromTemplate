
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MassUpdateReportSearchRecord } from './massUpdateReportSearchRecord';
import { Router, ActivatedRoute ,   RouterLink} from '@angular/router'; 
@Component({
  selector: 'mass-update-report-result-list',
  templateUrl: './mass-update-report-result-list.component.html'
})
export class MassUpdateReportSearchResultListComponent {
  @Input()
  resultList: MassUpdateReportSearchRecord[];
  @Input()
  resultCount=11;
  

}