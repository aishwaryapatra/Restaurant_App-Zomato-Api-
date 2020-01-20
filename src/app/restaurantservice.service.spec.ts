import { TestBed } from '@angular/core/testing';

import { RestaurantserviceService } from './restaurantservice.service';

describe('RestaurantserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantserviceService = TestBed.get(RestaurantserviceService);
    expect(service).toBeTruthy();
  });
});
