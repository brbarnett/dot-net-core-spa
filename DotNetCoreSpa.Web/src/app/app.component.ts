import { Component } from '@angular/core';

import { Adal4Service } from 'adal-angular4';

import { AuthSecretService } from './services/auth-secret.service';

const config = AuthSecretService.getConfig();

@Component({
    selector: 'app-root',
    template: `
        <header class="container">
            <nav>
                <a routerLink="/" routerLinkActive="active">Home</a>
                <a routerLink="/values" routerLinkActive="active">Values</a>
                <a routerLink="" (click)="logout()">Logout</a>
            </nav>
        </header>

        <main id="body" class="container">
            <router-outlet></router-outlet>
        </main>

        <footer>
    
        </footer>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private auth: Adal4Service) {
        this.auth.init(config);
    }

    ngOnInit() {

        // Handle callback if this is a redirect from Azure
        this.auth.handleWindowCallback();
    }

    public logout() {
        this.auth.logOut();
    }
}
