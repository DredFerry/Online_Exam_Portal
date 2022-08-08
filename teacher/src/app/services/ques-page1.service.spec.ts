import { TestBed } from '@angular/core/testing';

import { QuesPage1Service } from './ques-page1.service';

describe('QuesPage1Service', () => {
  let service: QuesPage1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuesPage1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
