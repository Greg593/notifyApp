import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  public paramData: any;

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
