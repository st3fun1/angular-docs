import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HigherOrderObservablesDemoName } from './higher-order-observables-demo-name.enum';
import { Post } from './post';
import { LogServiceService } from './services/log-service.service';

@Injectable({
  providedIn: 'root'
})
export class HigherorderobservablesdemorepoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPreselectedPosts$ = of(1, 10, 20).pipe(
    map(id => this.getPostsById(id))
  );

  constructor(private logService: LogServiceService, private httpService: HttpClient) { }

  
  demos: {[key in HigherOrderObservablesDemoName]: {fn: Function}} = {
    [HigherOrderObservablesDemoName.GENERIC]: {
      fn: this.runGenericCode.bind(this)
    },
  }

  runGenericCode() {
    this.logService.sendData('Running generic code');
    this.getPreselectedPosts$.subscribe( (data) => {
      console.log('Outer observable: ', data);
      this.logService.sendData(`Outer observable: ${data}`);
      data.subscribe( (data) => {
        console.log('Inner observable: ', data);
        this.logService.sendData(`Inner Observable: ${JSON.stringify(data, null, 3)}`);
      })
    });
  }

  runDemoCode = (name: HigherOrderObservablesDemoName) => { 
    return this.demos[name].fn();
  }


  getPostsById(id: number) {
    return this.httpService.get<Post>(`${this.apiUrl}/${id}`);
  }
}
