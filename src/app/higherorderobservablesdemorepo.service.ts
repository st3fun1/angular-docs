import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  concatMap,
  delay,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { HigherOrderObservablesDemoName } from './higher-order-observables-demo-name.enum';
import { Post } from './post';
import { LogServiceService } from './services/log-service.service';

@Injectable({
  providedIn: 'root',
})
export class HigherorderobservablesdemorepoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPreselectedPosts$ = of(1, 10, 20).pipe(map((id) => this.getPostsById(id)));

  getPreselectedPostsWithConcatMap$ = of(1, 10, 20).pipe(
    tap((id) => this.logService.sendData(`concatMap source Obsersable: ${id}`)),
    concatMap((id) => this.getPostsById(id))
  );

  getPreselectedPostsWithMergeMap$ = of(1, 10, 20).pipe(
    tap((id) => this.logService.sendData(`mergeMap source Obsersable: ${id}`)),
    mergeMap((id) => this.getPostsById(id))
  );

  getPreselectedPostsWithSwitchMap$ = of(1, 10, 20).pipe(
    tap((id) => this.logService.sendData(`switchMap source Obsersable: ${id}`)),
    switchMap((id) => this.getPostsById(id))
  );

  constructor(
    private logService: LogServiceService,
    private httpService: HttpClient
  ) {}

  demos: { [key in HigherOrderObservablesDemoName]: { fn: Function } } = {
    [HigherOrderObservablesDemoName.GENERIC]: {
      fn: this.runGenericCode.bind(this),
    },
    [HigherOrderObservablesDemoName.CONCAT_MAP]: {
      fn: this.runConcatMapExample.bind(this),
    },
    [HigherOrderObservablesDemoName.MERGE_MAP]: {
      fn: this.runMergeMapExample.bind(this),
    },
    [HigherOrderObservablesDemoName.SWITCH_MAP]: {
      fn: this.runSwitchMapExample.bind(this),
    },
  };

  private runGenericCode() {
    this.logService.sendData('Running generic code');
    this.getPreselectedPosts$.subscribe((data) => {
      console.log('Outer observable: ', data);
      this.logService.sendData(`Outer observable: ${data}`);
      data.subscribe((data) => {
        console.log('Inner observable: ', data);
        this.logService.sendData(
          `Inner Observable: ${JSON.stringify(data, null, 3)}`
        );
      });
    });
  }

  private runConcatMapExample() {
    this.logService.sendData('Running concatMap example code');
    this.getPreselectedPostsWithConcatMap$.subscribe((data) => {
      this.logService.sendData(`Final data: ${JSON.stringify(data, null, 3)}`);
    });
  }

  private runMergeMapExample() {
    this.logService.sendData('Running mergeMap example code');
    this.getPreselectedPostsWithMergeMap$.subscribe((data) => {
      this.logService.sendData(`Final data: ${JSON.stringify(data, null, 3)}`);
    });
  }

  private runSwitchMapExample() {
    this.logService.sendData('Running switchMap example code');
    this.getPreselectedPostsWithSwitchMap$.subscribe((data) => {
      this.logService.sendData(`Final data: ${JSON.stringify(data, null, 3)}`);
    });
  }

  runDemoCode = (name: HigherOrderObservablesDemoName) => {
    return this.demos[name].fn();
  };

  getPostsById(id: number) {
    return this.httpService.get<Post>(`${this.apiUrl}/${id}`);
  }
}
