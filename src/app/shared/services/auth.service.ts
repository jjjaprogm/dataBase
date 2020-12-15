import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces";
import {Observable} from "rxjs";


@Injectable()
export class AuthService {
  constructor(private http:HttpClient) {}
  get token(): string{
    return ''
  }
  login(user:User): Observable<any>{
   return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]`,user)
  }
logout(){

}
isAuthenticated():boolean{
    return !!this.token
}
private setToken(){

}
}