import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RegisterPage } from '../register/register.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  // { path: 'register',
  // loadChildren: './register/register.module#RegisterPageModule' },
  {
    path: 'register',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireModule.initializeApp(environment.firebase, 'boarding-hunt'),
    AngularFireAuthModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage, RegisterPage]
})
export class LoginPageModule {}
