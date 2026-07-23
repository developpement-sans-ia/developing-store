import { HttpClient } from "@angular/common/http";
import { inject, Service, signal } from "@angular/core";
import { map, Observable, tap, } from "rxjs";
import { Product } from "../../types";

@Service()
export class ProductService {
    private readonly http = inject(HttpClient);
    private productList = signal<Product[]>([]);
    readonly productListSignal = this.productList.asReadonly();
    private product = signal<Product>({} as Product);
    private productSignal = this.product.asReadonly();
    readonly url = "https://fakestoreapi.com/products";

    getProductList(): Observable<Product[]>{
        return this.http.get<Product[]>(this.url)
        .pipe(tap((response : Product[])=> this.productList.set(response)));
    }

    getOneProduct(id:string):Observable<Product>{
        return this.http.get<Product>(this.url+`/${id}`)
        .pipe(tap((response: Product)=>this.product.set(response)));
    }

    getProductListFiltered(category:string,price:number): Observable<Product[]>{
        return this.http.get<Product[]>(this.url)
        .pipe(map((response : Product[])=> {
            let listefiltered:Array<Product> = [];
            if(category==""&&price==0){
                this.productList.set(response);
                return response;
            }else if(category==""){
                response.forEach((res)=>{
                    if(res.price==price){
                        listefiltered.push(res);
                    }
                })
                this.productList.set(listefiltered);
                return listefiltered;
            }else if(price==0){
                response.forEach((res)=>{
                    if(res.category==category){
                        listefiltered.push(res);
                    }
                })
                this.productList.set(listefiltered);
                return listefiltered;
            }else{
                response.forEach((res)=>{                
                    if(res.category==category){
                        if(res.price==price){
                            listefiltered.push(res);
                        }
                    }
                })
                this.productList.set(listefiltered);
                return listefiltered;
            } 
        }));
    }
}
