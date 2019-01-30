import { TestBed } from '@angular/core/testing';

import { ClsSendService } from './cls-send.service';

describe('ClsSendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClsSendService = TestBed.get(ClsSendService);
    expect(service).toBeTruthy();
  });
});
