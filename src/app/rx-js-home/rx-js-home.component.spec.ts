import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsHomeComponent } from './rx-js-home.component';

describe('RxJsHomeComponent', () => {
  let component: RxJsHomeComponent;
  let fixture: ComponentFixture<RxJsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
