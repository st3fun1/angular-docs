import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderObservablesExampleComponent } from './higher-order-observables-example.component';

describe('HigherOrderObservablesExampleComponent', () => {
  let component: HigherOrderObservablesExampleComponent;
  let fixture: ComponentFixture<HigherOrderObservablesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherOrderObservablesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderObservablesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
