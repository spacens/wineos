// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Imports
import { WinesComponent } from './wines.component';
import { WinesCatalogComponent } from './catalog/catalog.component';
import { WinesDetailComponent } from './detail/detail.component';
import { WinesVarietalComponent } from './varietal/varietal.component';

const winesRoutes: Routes = [
    {
        path: 'wines',
        data: {
            title: 'Wines Catalog'
        },
        children: [
            { path: '', component: WinesCatalogComponent }
        ]
    },
    {
        path: 'wines/:id',
        data: {
            title: 'wines'
        },
        children: [
            { path: '', component: WinesVarietalComponent },
             { path: ':id', component: WinesDetailComponent }
        ]
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(winesRoutes)
    ],
    providers: [
    ]
})
export class WinesRoutingModule { }
