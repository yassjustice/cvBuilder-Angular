import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStationComponent } from './work-station.component';

describe('WorkStationComponent', () => {
  let component: WorkStationComponent;
  let fixture: ComponentFixture<WorkStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
