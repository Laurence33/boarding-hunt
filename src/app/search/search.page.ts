import { Component, OnInit } from '@angular/core';
import { UserOwnerProfileService } from '../services/user-owner-profile.service';
import { Owner } from '../models/Owner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  owners: Owner[];
  constructor(private service: UserOwnerProfileService, private router: Router) { }

  ngOnInit() {
  this.service.getOwners().subscribe(owners => {
    this.owners = owners;
  });
  }

  viewProfile(id: Owner['id']) {
    this.router.navigateByUrl('/profile/' + id);
  }

}
