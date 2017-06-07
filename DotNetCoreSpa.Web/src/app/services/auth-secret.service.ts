import { Injectable } from '@angular/core';

@Injectable()
export class AuthSecretService {

    constructor() {}

    static getConfig() {
        return {
            tenantId: '5fbbce2a-c3e6-4b5e-a51f-222674fdb44d',
            clientId: '4b30bed8-3cbc-46a7-a3b1-9fa45ab418dc'
        };
    }

}
