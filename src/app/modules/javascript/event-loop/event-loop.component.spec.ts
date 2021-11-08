import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLoopComponent } from './event-loop.component';

describe('EventLoopComponent', () => {
  let component: EventLoopComponent;
  let fixture: ComponentFixture<EventLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
