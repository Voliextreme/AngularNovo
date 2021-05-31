import { TestBed } from '@angular/core/testing';

import { GetPiadaService } from './get-piada.service';

describe('GetPiadaService', () => {
  let service: GetPiadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPiadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
