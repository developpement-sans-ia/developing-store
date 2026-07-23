import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductDetail } from './card-product-detail';

describe('CardProductDetail', () => {
  let component: CardProductDetail;
  let fixture: ComponentFixture<CardProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProductDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CardProductDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
