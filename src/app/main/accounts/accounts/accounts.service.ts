import { Observable } from "@angular-devkit/core/node_modules/rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Endpoints } from "app/common/endpoints/endpoints";

@Injectable({providedIn: "root"})
export class AccountsService{

    constructor(private http: HttpClient){}

    ENDPOINT_USER: string = Endpoints.ENDPOINT_ACCOUNTS;

    findAll(): Observable<any>{
        return this.http.get(this.ENDPOINT_USER);
    }
}