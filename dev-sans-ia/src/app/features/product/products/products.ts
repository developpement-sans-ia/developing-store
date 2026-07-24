import { Component, OnInit, signal, inject } from '@angular/core';
import { CardProduct } from '../../../shared/card-product/card-product';
import { ProductService } from '../../../shared/services/product-service/product-service';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Product } from '../../../shared/types';
import { CardProductDetail } from '../../../shared/card-product-detail/card-product-detail';
import { Modal } from '../modal/modal';
import { CartService } from '../../../shared/services/cart-service/cart-service';
import { CartInt } from '../../../shared/types';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CardProduct, CardProductDetail, Modal],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly productService = inject(ProductService);
  readonly cart = this.cartService.cartSignal;
  readonly productList = this.productService.productListSignal;

  categorySelected: string = "";
  priceSelected: number = 0;

  categoryList = [
    { value: "", valueName: "category" },
    { value: "women's clothing", valueName: "women's clothing" },
    { value: "men's clothing", valueName: "men's clothing" },
    { value: "jewelery", valueName: "jewelery" },
    { value: "electronics", valueName: "electronics" }
  ]

  priceList = [
    { value: 0, valueName: "price" },
    { value: 50, valueName: "<50€" },
    { value: 100, valueName: "<100€" },
    { value: 500, valueName: "<500€" },
    { value: 1000, valueName: "<1000€" },
  ]

  ngOnInit() {
    this.productService.getProductList().subscribe();
    this.cartService.loadFromLocalStorage();
    if(this.cart().id==null){
      this.cartService.setCart();
    } 
  }

  filterProduct() {
    this.productService.getProductListFiltered(this.categorySelected, this.priceSelected).subscribe();
  }

  //Pour la modale
  selectedProduct = signal<Product | null>(null);

  openModal(product: Product) {
    this.selectedProduct.set(product);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProduct.set(null);
    document.body.style.overflow = 'auto';
  }

  addToCart(){
    this.cartService.addToCart(this.selectedProduct());
    this.cartService.saveToLocalStorage();
    //console.log(this.cartService.cartSignal());
  }

}
