// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  Component Imports
import { LegalComponent } from './legal.component';

// Do not modify routes
const legalRoutes: Routes = [
    {
        path: 'trademarks',
        component: LegalComponent,
    },
    {
        path: 'acceptable-use-agreement',
        component: LegalComponent,
    },
    {
        path: 'privacy-policy',
        component: LegalComponent,
    },
    {
        path: 'use-agreement',
        component: LegalComponent,
    },
    {
        path: 'terms',
        component: LegalComponent,
    },
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(legalRoutes)
    ],
    providers: [
    ]
})
export class LegalRoutingModule { }
