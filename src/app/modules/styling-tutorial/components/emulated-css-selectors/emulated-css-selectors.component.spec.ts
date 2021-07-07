import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedCssSelectorsComponent } from './emulated-css-selectors.component';

describe('EmulatedCssSelectorsComponent', () => {
  let component: EmulatedCssSelectorsComponent;
  let fixture: ComponentFixture<EmulatedCssSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmulatedCssSelectorsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatedCssSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
