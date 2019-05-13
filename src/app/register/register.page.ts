import { Component, OnInit } from '@angular/core';
import { UserOwnerProfileService } from '../services/user-owner-profile.service';
import { Owner } from '../models/Owner';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  owner : Owner = {
    FName: '',
    LName: '',
    address: '',
    birthdate: '',
    email: '',
    phone: ''
  }

  constructor(private userOwnerProfileService: UserOwnerProfileService) { }

  ngOnInit() {
  }

  registerUser(){
    if(this.owner.FName != '' && this.owner.LName != '' && this.owner.address != '' && this.owner.birthdate != '' && this.owner.email != '' && this.owner.phone != ''){
      this.userOwnerProfileService.registerUser(this.owner);
      this.owner.FName = '';
      this.owner.LName = '';
      this.owner.address = '';
      this.owner.birthdate = '';
      this.owner.email = '';
      this.owner.phone = '';
    }
  }
}
