import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubscribeComponent } from './subscribe.component';

const subscribeRoutes: Routes = [
    {
        path: 'newsletter',
        component: SubscribeComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(subscribeRoutes)
    ],
    providers: [
    ]
})
export class SubscribeRoutingModule { }

