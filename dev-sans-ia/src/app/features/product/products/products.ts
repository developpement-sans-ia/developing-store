import { Component, OnInit, signal, inject } from '@angular/core';
import { CardProduct } from '../../../shared/card-product/card-product';
import { ProductService } from '../../../shared/product-service';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CardProduct],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  private readonly productService = inject(ProductService);
  readonly productList = this.productService.productListSignal;

  categorySelected:string="";
  priceSelected:string="";

  categoryList=[
    {value:"", valueName:"category"},
    {value:"women's clothing", valueName:"women's clothing"},
    {value:"men's clothing", valueName:"men's clothing"},
    {value:"jewelery", valueName:"jewelery"},
    {value:"electronics", valueName:"electronics"}
  ]

  priceList=[
    {value:"", valueName:"price"},
    {value:"50", valueName:"<50€"},
    {value:"100", valueName:"<100€"},
    {value:"100", valueName:"<100€"},
  ]

  ngOnInit(){
    this.productService.getProductList().subscribe();
  }

  filterProduct(){
    // WIP 
  }
}
