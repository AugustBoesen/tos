import { Routes } from '@angular/router';
import { TerminalComponent } from './terminal/terminal.component';
import { IndexComponent } from './index/index.component';
import { RegistryComponent } from './registry/registry.component';

export const routes: Routes = [
  { path: 'index', title: 'TOS DTCache', component: IndexComponent },
  {
    path: 'terminal',
    title: 'TOS Terminal Interface',
    component: TerminalComponent,
  },
  // {
  //   path: 'registry',
  //   title: 'TOS Registry Interface',
  //   component: RegistryComponent,
  // },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];
