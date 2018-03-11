// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Imports
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
    {
        path: 'contact-us',
        component: ContactComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(contactRoutes)
    ],
    providers: [
    ]
})
export class ContactRoutingModule { }

