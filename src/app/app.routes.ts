import { Routes } from '@angular/router';

// Shell
import { Shell } from './layout/shell/shell';

// PAGES
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'project', component: Projects },
      { path: 'project/:projectId', component: Projects },
    ],
  },
];
