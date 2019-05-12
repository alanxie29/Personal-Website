import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellogbyeComponent } from './hellogbye.component';

describe('HellogbyeComponent', () => {
  let component: HellogbyeComponent;
  let fixture: ComponentFixture<HellogbyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellogbyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellogbyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
