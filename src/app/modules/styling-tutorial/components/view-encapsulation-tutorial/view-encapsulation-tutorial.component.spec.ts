import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationTutorialComponent } from './view-encapsulation-tutorial.component';

describe('ViewEncapsulationTutorialComponent', () => {
  let component: ViewEncapsulationTutorialComponent;
  let fixture: ComponentFixture<ViewEncapsulationTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEncapsulationTutorialComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
