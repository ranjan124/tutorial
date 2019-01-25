import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut6Component } from './tut6.component';

describe('Tut6Component', () => {
  let component: Tut6Component;
  let fixture: ComponentFixture<Tut6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tut6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
