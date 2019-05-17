import { Component, OnInit } from '@angular/core';
import { UserOwnerProfileService } from '../../../services/user-owner-profile.service';
import { Owner } from '../../../models/Owner';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  owners: Owner[];

  constructor(private userOwnerProfileService: UserOwnerProfileService) { }

  ngOnInit() {
    this.userOwnerProfileService.getOwners().subscribe(owners => {
      this.owners = owners;
    });
  }
}
