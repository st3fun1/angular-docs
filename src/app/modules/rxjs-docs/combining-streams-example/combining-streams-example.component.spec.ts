import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombiningStreamsExampleComponent } from './combining-streams-example.component';

describe('CombiningStreamsExampleComponent', () => {
  let component: CombiningStreamsExampleComponent;
  let fixture: ComponentFixture<CombiningStreamsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombiningStreamsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombiningStreamsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
