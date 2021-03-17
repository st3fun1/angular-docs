import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { HomeComponent } from './home/home.component';
import { ObservablesComponent } from './observables/observables.component';
import { RxJSComponent } from './rx-js/rx-js.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'observables', component: ObservablesComponent, data: {animation: 'ObservablesPage'}},
  { path: 'dependency-injection', component: DependencyInjectionComponent},
  { path: 'rxjs', component: RxJSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
