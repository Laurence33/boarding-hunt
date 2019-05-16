import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password = '';
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login() {
    const email = this.email;
    const password = this.password;
    const message = document.getElementById('errorMessage');
    message.innerText = ' ';
    if (email === '' || password === '') {
      return message.innerText = 'Please fill the fields first.';
    }
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.dir(error);
      if (error.code === 'auth/invalid-email') {
        message.innerText = 'Please input a valid email address.';
      } else if (error.code === 'auth/user-not-found') {
        message.innerText = 'User not found, please register first.';
      } else if (error.code === 'auth/wrong-password') {
        message.innerText = 'Incorrect Password.';
      } else {
        message.innerText = 'Something went wrong please try again.';
      }
    }
  }

  removeWarning() {
    document.getElementById('errorMessage').innerText = '';
  }
}
