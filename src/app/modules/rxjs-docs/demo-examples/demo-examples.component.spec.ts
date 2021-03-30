import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExamplesComponent } from './demo-examples.component';

describe('DemoExamplesComponent', () => {
  let component: DemoExamplesComponent;
  let fixture: ComponentFixture<DemoExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
