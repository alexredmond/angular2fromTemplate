export class MassUpdateNewRequest {
  changeTypeCode: string;
  requestorUsername: string;
  referenceNumber: string;
  midGroup: string;
  approverUsernames: string;
  notificationEmails: string;
  midList: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;


  constructor( changeTypeCode: string, requestorUsername: string ) {
    this.changeTypeCode = changeTypeCode;
    this.requestorUsername = requestorUsername;
   }
}
