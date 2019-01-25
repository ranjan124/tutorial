import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut8Component } from './tut8.component';

describe('Tut8Component', () => {
  let component: Tut8Component;
  let fixture: ComponentFixture<Tut8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tut8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
