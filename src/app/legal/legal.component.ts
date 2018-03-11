// Angular Imports
import { Component, OnInit } from '@angular/core';
// EJG Imports
import { ConfigService } from 'ejg-config-service';

@Component({
  selector: 'app-wineos-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})

export class LegalComponent implements OnInit {
   public config: any;
   public editorMode = false;

   constructor(public configSrvc: ConfigService) {}

   public ngOnInit() {
       this.config = this.configSrvc.config;
       this.editorMode = this.configSrvc.isEditor();
   }
}
