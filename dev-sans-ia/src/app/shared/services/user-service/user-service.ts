import { HttpClient } from "@angular/common/http";
import { inject, Service, signal } from '@angular/core';
import { User } from '../../types';
import { Observable, map, tap } from 'rxjs';

@Service()
export class UserService {
    private readonly http = inject(HttpClient);
    private user = signal<User>({} as User);
    readonly userSignal = this.user.asReadonly();
    readonly url = "https://fakestoreapi.com/users";


    getUser(email:string, password:string):Observable<User | Error>{
        return this.http.get<User[]>(this.url)
        .pipe(map((response: User[])=> {
            let userTemp:User={} as User;
            response.forEach((res)=>{
                if(res.email==email&&res.password==password){
                    userTemp = res;
                    return res;
                }
                else{
                    return new Error("Utilisateur et/ou mdp invalide");
                }
            })
            if (userTemp.id!=null){
                this.user.set(userTemp);
                return userTemp;
            }else{
                return new Error("Utilisateur et/ou mdp invalide");
            }
        }));
    }
        /*
    getUser():Observable<User>{
            return this.http.get<User>("https://fakestoreapi.com/users/1")
            .pipe(tap((response: User)=>this.user.set(response)));
        }
            */
}
