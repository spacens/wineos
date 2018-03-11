import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../menu/menu.component';

@Component({
  selector: 'app-archive-header',
  templateUrl: './archive-header.component.html',
  styleUrls: ['./archive-header.component.scss']
})
export class ArchiveHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() links: Link[];
  constructor() { }

  ngOnInit() {
  }

}
