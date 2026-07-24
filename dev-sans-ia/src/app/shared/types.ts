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
    address: AddressUser;
    phone: string;
    name: Name;
}

export interface CartInt{
    id:number;
    userId:number;
    products:Product[]
}

interface AddressUser {
    city: string;
    street: string;
    number: number;
    zipcode: string;
}

interface Name {
    firstname: string;
    lastname: string;
}

export interface loginData{
    email:string;
    password:string;
}