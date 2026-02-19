import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Initiatives } from './features/initiatives/initiatives';
import { Team } from './features/team/team';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'FASS Services - Home' },
  { path: 'about', component: About, title: 'FASS Services - About Us' },
  { path: 'initiatives', component: Initiatives, title: 'FASS Services - Initiatives' },
  { path: 'team', component: Team, title: 'FASS Services - Team' },
  { path: 'contact', component: Contact, title: 'FASS Services - Contact' },
  { path: '**', redirectTo: '' }
];
