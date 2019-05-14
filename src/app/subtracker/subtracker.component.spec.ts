import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtrackerComponent } from './subtracker.component';

describe('SubtrackerComponent', () => {
  let component: SubtrackerComponent;
  let fixture: ComponentFixture<SubtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
