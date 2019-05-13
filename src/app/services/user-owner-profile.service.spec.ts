import { TestBed } from '@angular/core/testing';

import { UserOwnerProfileService } from './user-owner-profile.service';

describe('UserOwnerProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserOwnerProfileService = TestBed.get(UserOwnerProfileService);
    expect(service).toBeTruthy();
  });
});
