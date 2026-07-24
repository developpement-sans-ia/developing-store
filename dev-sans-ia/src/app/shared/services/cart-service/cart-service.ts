import { Service, signal } from '@angular/core';
import { Product } from '../../types';
import { CartInt } from '../../types';

@Service()
export class CartService {
    private cart = signal<CartInt>({} as CartInt);
    readonly cartSignal = this.cart.asReadonly();

    addToCart(product:Product){
        this.cart().products.push(product);
    }

    removeFromCart(product:Product){
        this.cart().products = this.cart()
        .products.filter((ele, ind) => ind !== this.cart()
        .products.findIndex((prod : Product) => prod = product));
    }

    saveToLocalStorage(){
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }
    
    loadFromLocalStorage(){
        const item = localStorage.getItem("cart");
        item ? this.cart.set(JSON.parse(item)) : null;
    }
}
