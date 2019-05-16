import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.page.html',
  styleUrls: ['./create-password.page.scss'],
})
export class CreatePasswordPage implements OnInit {
  email = '';
  password = '';
  cpassword = '';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async register() {
    const email = this.email;
    const pass = this.password;
    const cpass = this.cpassword;
    if (pass !== cpass) {
      return document.getElementById('errorMessage').innerText = 'Password does not match.';
    } else if (pass === '') {
      return document.getElementById('errorMessage').innerText = 'Please enter a password first.';
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
    } catch (error) {
      console.dir(error);
      if (error.code === 'auth/weak-password') {
        document.getElementById('errorMessage').innerText = 'Weak Password not accepted.';
      }
    }
  }
  removeWarning() {
    document.getElementById('errorMessage').innerText = '';
  }
}
