import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { apiRAMLComponent } from './api-raml.component';
import { apiStandardComponent } from './api-standard.component';
import { contributeComponent } from './contribute.component';
import { homeComponent } from './home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'apiReference', component: apiRAMLComponent },

  { path: 'apiStandard', component: apiStandardComponent  },

  { path: 'contribute', component: contributeComponent  },

  { path: '', component: homeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
