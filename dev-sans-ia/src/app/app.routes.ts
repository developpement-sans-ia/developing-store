import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Product } from './features/product/product';
import { Cart } from './features/cart/cart';
import { Page404 } from './features/page404/page404';

export const routes: Routes = [
  { path : '', component : Home},
  { path : 'product', component : Product},
  { path : 'cart', component : Cart},
  { path : '404', component : Page404},
];
