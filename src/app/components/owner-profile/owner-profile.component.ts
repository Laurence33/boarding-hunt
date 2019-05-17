import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserOwnerProfileService } from '../../services/user-owner-profile.service';
import { Owner } from '../../models/Owner';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.scss'],
})
export class OwnerProfileComponent implements OnInit {

  id: string;
  owner: Owner;
  constructor(private route: ActivatedRoute, private service: UserOwnerProfileService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getOwner(this.id).subscribe(owner => {
      this.owner = owner;
    });
  }

}
