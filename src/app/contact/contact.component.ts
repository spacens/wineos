// Angular Imports
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
 @Component({
   encapsulation: ViewEncapsulation.None,
   // providers: [ConfigService, ContactUsService, FormBuilder],
   selector: 'app-contact',
   templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.scss']
 })
 export class ContactComponent implements OnInit {
   ngOnInit(): void {
   }
 }