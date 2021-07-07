import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTermsAndSyntaxContentComponent } from './rxjs-terms-and-syntax-content.component';

describe('RxjsTermsAndSyntaxContentComponent', () => {
  let component: RxjsTermsAndSyntaxContentComponent;
  let fixture: ComponentFixture<RxjsTermsAndSyntaxContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsTermsAndSyntaxContentComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTermsAndSyntaxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
