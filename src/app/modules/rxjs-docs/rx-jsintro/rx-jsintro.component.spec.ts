import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSIntroComponent } from './rx-jsintro.component';

describe('RxJSIntroComponent', () => {
  let component: RxJSIntroComponent;
  let fixture: ComponentFixture<RxJSIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJSIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJSIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
