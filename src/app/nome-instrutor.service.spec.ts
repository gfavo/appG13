import { TestBed } from '@angular/core/testing';

import { NomeInstrutorService } from './nome-instrutor.service';

describe('NomeInstrutorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NomeInstrutorService = TestBed.get(NomeInstrutorService);
    expect(service).toBeTruthy();
  });
});
