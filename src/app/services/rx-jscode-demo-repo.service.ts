import { Injectable } from '@angular/core';
import { from, of, fromEvent } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { CodeDemoName } from '../modules/shared/interfaces/code-demo-name.enum';
import { LogServiceService } from './log-service.service';

@Injectable({
  providedIn: 'root',
})
export class RxJSCodeDemoRepoService {
  constructor(private logService: LogServiceService) {}

  demos: { [key in CodeDemoName]: { fn: Function } } = {
    [CodeDemoName.FROM]: {
      fn: this.runFromCode.bind(this),
    },
    [CodeDemoName.OF]: {
      fn: this.runOfCode.bind(this),
    },
    [CodeDemoName.FROM_EVENT]: {
      fn: this.runFromEvent.bind(this),
    },
    [CodeDemoName.OPERATORS]: {
      fn: this.runOperators.bind(this),
    },
    [CodeDemoName.REPLAY_SUBJECT]: {
      fn: this.runReplaySubject.bind(this),
    },
  };

  runDemoCode = (name: CodeDemoName) => {
    return this.demos[name].fn();
  };

  runReplaySubject() {}

  runOfCode() {
    this.logService.sendData('Running `.of` code');
    of(2, 4, 6, 8).subscribe((data) => {
      this.logService.sendData(`Next value is ${data}.`);
    });
    this.logService.sendData('Running `.of` variation code');
    of([2, 4, 6, 8]).subscribe((data) => {
      this.logService.sendData(
        `Next value is ${data}. Type of data is ${typeof data}.`
      );
    });
  }

  runFromCode() {
    this.logService.sendData('Running `.from` code');
    from([2, 4, 6, 8]).subscribe((data) => {
      this.logService.sendData(`Next value is ${data}.`);
    });
  }

  runFromEvent() {
    const ev = fromEvent(document, 'mousemove').subscribe((data) => {
      this.logService.sendData(`Mouse moved: ${data}`);
    });

    setTimeout(() => {
      ev.unsubscribe();
    }, 5000);
  }

  runOperators() {
    from([20, 100, 3, 19, 6])
      .pipe(
        tap((item) => this.logService.sendData(`Initial value is ${item}`)),
        map((item) => item * 10),
        map((item) => {
          if (item === 30) {
            throw new Error('30 detected');
          }
          return item;
        }),
        take(2)
      )
      .subscribe(
        (data) => {
          this.logService.sendData(`Final value is ${data}`);
        },
        (err) => {
          this.logService.sendData(`Error: ${err.message}`);
        },
        () => {
          this.logService.sendData('The stream has finished emitting values.');
        }
      );
  }
}
