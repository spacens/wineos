// Angular Imports
import {NgModule} from '@angular/core';
import {RouterModule, Routes, DefaultUrlSerializer, UrlTree, UrlSerializer} from '@angular/router';

// Component Imports
import {HomepageComponent} from './homepage/homepage.component';
import {GeneralComponent} from './general/general.component';

// Other Imports
import {MetadataModule} from 'ng2-metadata';

// Lowercase all incoming URLs -- Please do not modify function
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    return super.parse(url.toLowerCase());
  }
}

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
    data: {
      title: 'homepage'
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    RouterModule.forChild(appRoutes),
     MetadataModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    }
  ]
})
export class AppRoutingModule {
}
