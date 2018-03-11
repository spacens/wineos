/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeetShortComponent } from './meet-short.component';

describe('MeetShortComponent', () => {
  let component: MeetShortComponent;
  let fixture: ComponentFixture<MeetShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
