import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToolsComponent } from './app-tools.component';

describe('AppToolsComponent', () => {
  let component: AppToolsComponent;
  let fixture: ComponentFixture<AppToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
