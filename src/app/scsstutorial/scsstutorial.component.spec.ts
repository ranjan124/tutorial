import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScsstutorialComponent } from './scsstutorial.component';

describe('ScsstutorialComponent', () => {
  let component: ScsstutorialComponent;
  let fixture: ComponentFixture<ScsstutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScsstutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScsstutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
