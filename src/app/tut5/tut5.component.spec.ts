import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut5Component } from './tut5.component';

describe('Tut5Component', () => {
  let component: Tut5Component;
  let fixture: ComponentFixture<Tut5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tut5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tut5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
