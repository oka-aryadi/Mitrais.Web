import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { GenderResolver } from './shared/resolvers/gender.resolver';


const routes: Routes = [
  {
    path: '',
    component: RegisterPageComponent,
    resolve: { genders: GenderResolver }
  },
  { path: '**', component: RegisterPageComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
