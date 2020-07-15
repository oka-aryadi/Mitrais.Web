import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { GenderResolver } from './shared/resolvers/gender.resolver';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FooterComponent } from '../app/pages/register-page/footer/footer.component';
import { SuccessComponent } from '../app/pages/register-page/success/success.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterPageComponent,
    resolve: { genders: GenderResolver },
    children: [
      {
        path: '',
        component: FooterComponent
      },
      {
        path: 'success',
        component: SuccessComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  { path: '**', component: RegisterPageComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
