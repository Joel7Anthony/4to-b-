import { TestBed } from '@angular/core/testing';

import { ProductHttpService } from './product.service';

describe('ProductService', () => {
  let service: ProductHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
