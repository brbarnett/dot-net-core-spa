import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class UrlService {

    constructor() { }

    public generateUrl (fragment: string): string {
        return environment.apiBaseUri + fragment;
    }

}
