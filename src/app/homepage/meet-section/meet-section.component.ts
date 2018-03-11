import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-meet-section',
  templateUrl: './meet-section.component.html',
  styleUrls: ['./meet-section.component.scss']
})
export class MeetSectionComponent implements OnInit {
  address = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  find() {
    this.router.navigate(['/where-to-buy', this.address]);
  }

}
