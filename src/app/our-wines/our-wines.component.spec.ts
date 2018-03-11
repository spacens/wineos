/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurWinesComponent } from './our-wines.component';

describe('OurWinesComponent', () => {
  let component: OurWinesComponent;
  let fixture: ComponentFixture<OurWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
