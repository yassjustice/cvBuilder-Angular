import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditorComponent } from './pages/editor/editor.component';
import { SignLayoutComponent } from './layouts/sign-layout/sign-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { WorkStationComponent } from './pages/work-station/work-station.component';
import { ServicesComponent } from './pages/services/services.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  children:[
    { path: '', redirectTo: 'templates', pathMatch: 'full' }, // Redirect to templates by default
    { path: 'editor', component: EditorComponent },
    { path: 'templates', component: TemplatesComponent },
    { path: 'workStation', component: WorkStationComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'settings', component: SettingsComponent },
  ]
 },
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'editor', component: EditorComponent },
      { path: 'signup', component: SignLayoutComponent },
      { path: 'about', component: AboutComponent },
    ],
  },

];
