import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRetrievalExampleComponent } from './data-retrieval-example.component';

describe('DataRetrievalExampleComponent', () => {
  let component: DataRetrievalExampleComponent;
  let fixture: ComponentFixture<DataRetrievalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataRetrievalExampleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRetrievalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
