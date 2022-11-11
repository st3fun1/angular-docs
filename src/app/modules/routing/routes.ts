import { Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('../rxjs-docs/rxjs-docs.module').then((m) => m.RxjsDocModule),
  },
  {
    path: 'styling-tutorial',
    loadChildren: () =>
      import('../styling-tutorial/styling-tutorial.module').then(
        (m) => m.StylingTutorialModule
      ),
  },
  {
    path: 'performance',
    loadChildren: () =>
      import('../performance/performance.module').then(
        (m) => m.PerformanceModule
      ),
  },
];

export default routes;
