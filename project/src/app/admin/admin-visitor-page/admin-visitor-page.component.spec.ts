import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVisitorPageComponent } from './admin-visitor-page.component';

describe('AdminVisitorPageComponent', () => {
  let component: AdminVisitorPageComponent;
  let fixture: ComponentFixture<AdminVisitorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVisitorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVisitorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
