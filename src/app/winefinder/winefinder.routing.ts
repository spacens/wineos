// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Imports
import { WinefinderComponent } from './winefinder.component';

const winefinderRoutes: Routes = [
    {
        path: 'find-our-wines',
        component: WinefinderComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(winefinderRoutes)
    ],
    providers: [
    ]
})
export class WinefinderRoutingModule { }

