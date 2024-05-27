import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshoploginComponent } from './workshoplogin.component';

describe('WorkshoploginComponent', () => {
  let component: WorkshoploginComponent;
  let fixture: ComponentFixture<WorkshoploginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshoploginComponent]
    });
    fixture = TestBed.createComponent(WorkshoploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
