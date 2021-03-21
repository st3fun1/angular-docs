import { TestBed } from '@angular/core/testing';

import { RxJsCodeService } from './rx-js-code.service';

describe('RxJsCodeService', () => {
  let service: RxJsCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxJsCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
