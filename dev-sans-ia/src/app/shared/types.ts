export interface Product{
   id: number;
   title : string;
   price : number;
   description : string;
   category: string;
   image: string;
}

export interface User{
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface CartInt{
    id:number;
    userId:number;
    products:Product[]
}