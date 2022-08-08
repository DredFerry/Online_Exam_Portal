import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPCodeComponent } from './get-pcode.component';

describe('GetPCodeComponent', () => {
  let component: GetPCodeComponent;
  let fixture: ComponentFixture<GetPCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
