import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './user/owner/profile/profile.module#ProfilePageModule' },
  { path: 'owner-profile', loadChildren: './owner/profile/profile.module#ProfilePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'createPassword', loadChildren: './create-password/create-password.module#CreatePasswordPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
