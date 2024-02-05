import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSidebarComponent } from './base-sidebar.component';

describe('BaseSidebarComponent', () => {
  let component: BaseSidebarComponent;
  let fixture: ComponentFixture<BaseSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
