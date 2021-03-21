import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {
  logSubject$: Subject<string> = new Subject();
  constructor() { }

  unsubscribeFromLogSubject() {
    this.logSubject$.unsubscribe();
  }

  sendData(data: string)  {
      console.log(`Log Service: \n ${data}`)
      this.logSubject$.next(data);
  }
}
