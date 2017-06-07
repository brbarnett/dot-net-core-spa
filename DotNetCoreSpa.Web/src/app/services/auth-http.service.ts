import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Adal4Service } from 'adal-angular4';

@Injectable()
export class AuthHttpService {

    constructor(private auth: Adal4Service, private http: Http) { }

    public get(url): Observable<Response> {
        let headers: Headers = new Headers();
        headers.append('Authorization', `Bearer ${this.auth.userInfo.token}`);

        return this.http.get(url, new RequestOptions({ headers: headers }));
    }
}
