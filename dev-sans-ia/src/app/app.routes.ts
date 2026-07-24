import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Products } from './features/product/products/products';
import { Cart } from './features/cart/cart';
import { Page404 } from './features/page404/page404';
import { UserPage } from './features/userPage/user-page/user-page';
import { UserPageDetail } from './features/userPage/user-page-detail/user-page-detail/user-page-detail';

export const routes: Routes = [
  { path : '', component : Home},
  { path : 'product', component : Products},
  { path : 'cart', component : Cart},
  { path : '404', component : Page404},
  { path : 'user', component : UserPage},
  { path : 'userlogedin', component : UserPageDetail}
];
