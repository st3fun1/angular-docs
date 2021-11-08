import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateElementsComponent } from './template-elements.component';

describe('TemplateElementsComponent', () => {
  let component: TemplateElementsComponent;
  let fixture: ComponentFixture<TemplateElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
