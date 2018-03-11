/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WinePromoComponent } from './wine-promo.component';

describe('WinePromoComponent', () => {
  let component: WinePromoComponent;
  let fixture: ComponentFixture<WinePromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinePromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
