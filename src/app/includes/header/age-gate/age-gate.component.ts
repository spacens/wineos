import {AgeGateComponent as AgeGateComp, AgeGateService} from 'wineos-agegate';
import {Component, OnInit} from '@angular/core';

class AgeGateContent {
  constructor(public title = '', public description = '', public buttonText = '') {
  }
}
@Component({
  selector: 'app-agegate',
  templateUrl: './age-gate.html',
  styleUrls : ['./age-gate.scss'],
  providers: [AgeGateService],
})
export class AgeGateComponent extends AgeGateComp implements OnInit {
  showAgeGate = false;
  content: AgeGateContent;

  ngOnInit(): void {
    super.ngOnInit();
    // load data from api
    this.content = new AgeGateContent('Age gate', '', 'enter');
  }

  showStaticModal(): void {
    this.showAgeGate = true;
  }


  hideStaticModal(): void {
    this.showAgeGate = false;
  }
}

