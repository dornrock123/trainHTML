import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopScssComponent } from './workshop-scss.component';

describe('WorkshopScssComponent', () => {
  let component: WorkshopScssComponent;
  let fixture: ComponentFixture<WorkshopScssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopScssComponent]
    });
    fixture = TestBed.createComponent(WorkshopScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
