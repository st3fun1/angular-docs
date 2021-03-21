import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { CodeDemoName } from './code-demo-name.enum';
import { LogServiceService } from './log-service.service';

@Injectable({
  providedIn: 'root'
})
export class RxJSCodeDemoRepoService {
  constructor(private logService: LogServiceService) {}

  demos: {[key in CodeDemoName]: {fn: Function}} = {
    [CodeDemoName.FROM]: {
      fn: this.runFromCode.bind(this)
    },
    [CodeDemoName.OF]: {
      fn: this.runOfCode.bind(this)
    } 
  }

  runDemoCode(name: CodeDemoName) {
    return this.demos[name].fn();
  }

  runOfCode() {
    this.logService.sendData('Running `.of` code');
    of(2, 4, 6, 8).subscribe( (data) => {
      this.logService.sendData(`Next value is ${data}.`);
    })
    this.logService.sendData('Running `.of` variation code');
    of([2, 4, 6, 8]).subscribe( (data) => {
      this.logService.sendData(`Next value is ${data}. Type of data is ${typeof data}.`);
    })
  }

  runFromCode() {
    this.logService.sendData('Running `.from` code');
    from([2, 4, 6, 8]).subscribe( (data) => {
      this.logService.sendData(`Next value is ${data}.`);
    })
  }
}
