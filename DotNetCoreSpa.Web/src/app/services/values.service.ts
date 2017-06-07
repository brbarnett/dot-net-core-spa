import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { AuthHttpService } from '../services/auth-http.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ValuesService {

    constructor(private http: AuthHttpService) { }

    public getValues(): Observable<string> {
        return this.http.get('https://localhost:44332/api/values')
            .map((res: Response) => {
                console.log('got values!');
                return res.json();
            })
            .catch((error: Response | any) => Observable.throw(error));
    }
}
