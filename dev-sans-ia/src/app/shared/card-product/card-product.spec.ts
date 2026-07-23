import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProduct } from './card-product';

describe('CardProduct', () => {
  let component: CardProduct;
  let fixture: ComponentFixture<CardProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(CardProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
