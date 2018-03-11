/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoGoComponent } from './go-go.component';

describe('GoGoComponent', () => {
  let component: GoGoComponent;
  let fixture: ComponentFixture<GoGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
