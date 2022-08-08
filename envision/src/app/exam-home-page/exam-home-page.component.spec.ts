import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHomePageComponent } from './exam-home-page.component';

describe('ExamHomePageComponent', () => {
  let component: ExamHomePageComponent;
  let fixture: ComponentFixture<ExamHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
