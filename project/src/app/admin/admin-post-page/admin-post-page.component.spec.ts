import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostPageComponent } from './admin-post-page.component';

describe('AdminPostPageComponent', () => {
  let component: AdminPostPageComponent;
  let fixture: ComponentFixture<AdminPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
