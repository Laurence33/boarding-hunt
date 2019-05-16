import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { CreatePasswordPage } from './create-password/create-password.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: 'createPassword',
    // component: CreatePasswordPage
    loadChildren: './create-password/create-password.module#CreatePasswordPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage, CreatePasswordPage]
})
export class RegisterPageModule {}
