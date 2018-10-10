import { TestBed } from '@angular/core/testing';

import { AvailableRoomsService } from './available-rooms.service';

describe('AvailableRoomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableRoomsService = TestBed.get(AvailableRoomsService);
    expect(service).toBeTruthy();
  });
});
