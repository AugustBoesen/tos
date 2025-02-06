import { Routes } from '@angular/router';
import { TerminalComponent } from './terminal/terminal.component';
import { IndexComponent } from './index/index.component';
import { RegistryComponent } from './registry/registry.component';
import { Chatlog1Component } from './chatlog1/chatlog1.component';

export const routes: Routes = [
  { path: 'index', title: 'TOS DTCache', component: IndexComponent },
  {
    path: 'terminal',
    title: 'TOS Terminal Interface',
    component: TerminalComponent,
  },
  {
    path: 'log2394873249857329847',
    title: 'CHATLOG 2394873249857329847',
    component: Chatlog1Component,
  },
  // {
  //   path: 'registry',
  //   title: 'TOS Registry Interface',
  //   component: RegistryComponent,
  // },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];
