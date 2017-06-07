import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ValuesService {

    constructor(private auth: Adal4Service, private http: Http) { }

    public getValues(): Observable<string> {

        let headers: Headers = new Headers();
        headers.append('Authorization', `Bearer ${this.auth.userInfo.token}`);
        return this.http.get('https://localhost:44332/api/values', new RequestOptions({ headers: headers }))
            .map((res: Response) => {
                console.log('got values!');
                return res.json();
            })
            .catch((error: Response | any) => Observable.throw(error));
    }
}
