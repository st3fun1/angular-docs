import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSTermsAndSyntaxComponent } from './rx-jsterms-and-syntax.component';

describe('RxJSTermsAndSyntaxComponent', () => {
  let component: RxJSTermsAndSyntaxComponent;
  let fixture: ComponentFixture<RxJSTermsAndSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJSTermsAndSyntaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJSTermsAndSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
