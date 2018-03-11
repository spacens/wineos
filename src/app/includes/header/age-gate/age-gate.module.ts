import {AgeGateModule as AGM} from 'wineos-agegate';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AgeGateComponent} from './age-gate.component';

@NgModule({
  declarations : [AgeGateComponent],
  exports : [AgeGateComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AgeGateModule extends AGM {
}
