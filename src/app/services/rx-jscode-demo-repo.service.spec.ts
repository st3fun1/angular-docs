import { TestBed } from '@angular/core/testing';

import { RxJSCodeDemoRepoService } from './rx-jscode-demo-repo.service';

describe('RxJSCodeDemoRepoService', () => {
  let service: RxJSCodeDemoRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxJSCodeDemoRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
