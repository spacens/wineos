/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WhereToBuyService } from './where-to-buy.service';

describe('WhereToBuyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhereToBuyService]
    });
  });

  it('should ...', inject([WhereToBuyService], (service: WhereToBuyService) => {
    expect(service).toBeTruthy();
  }));
});
