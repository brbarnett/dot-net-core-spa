import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http';

import { AuthHttpService } from '../services/auth-http.service';
import { UrlService } from '../services/url.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ValuesService {
    
    constructor(private http: AuthHttpService, private urlService: UrlService) {}

    public getValues(): Observable<string> {
        return this.http.get(this.urlService.generateUrl('values'))
            .map((res: Response) => res.json())
            .catch((error: Response | any) => Observable.throw(error));
    }
}
