import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageDetail } from './user-page-detail';

describe('UserPageDetail', () => {
  let component: UserPageDetail;
  let fixture: ComponentFixture<UserPageDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPageDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPageDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
