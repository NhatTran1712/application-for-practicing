import { TestBed } from '@angular/core/testing';

import { ShowUserService } from './showuser.service';

describe('ShowuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowUserService = TestBed.get(ShowUserService);
    expect(service).toBeTruthy();
  });
});
