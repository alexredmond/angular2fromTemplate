import { MassUpdateReportSearchRecord } from './massUpdateReportSearchRecord'

export class MassUpdateReportSearchResponse {
  navigationStatus: string;
  errorMessages: string[];
  infoMessage: string;
  records: MassUpdateReportSearchRecord[];
  recordsCount: number;

 
  constructor( ) {
    
   }
}
