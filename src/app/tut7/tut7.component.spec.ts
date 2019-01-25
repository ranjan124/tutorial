import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut7Component } from './tut7.component';

describe('Tut7Component', () => {
  let component: Tut7Component;
  let fixture: ComponentFixture<Tut7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tut7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
