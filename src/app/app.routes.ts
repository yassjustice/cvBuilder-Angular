import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditorComponent } from './pages/editor/editor.component';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { SignLayoutComponent } from './layouts/sign-layout/sign-layout.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  // { path: '', component: PageLayoutComponent },
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'editor', component: EditorComponent },
      { path: 'signup', component: SignLayoutComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];
