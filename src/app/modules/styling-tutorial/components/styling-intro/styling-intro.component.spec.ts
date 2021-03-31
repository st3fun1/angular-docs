import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingIntroComponent } from './styling-intro.component';

describe('StylingIntroComponent', () => {
  let component: StylingIntroComponent;
  let fixture: ComponentFixture<StylingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
