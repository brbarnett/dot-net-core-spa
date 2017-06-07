import { Component } from '@angular/core';

import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

import { AuthSecretService } from './services/auth-secret.service';

const config = AuthSecretService.getConfig();

@Component({
    selector: 'app-root',
    template: `
        <header class="container">
            <nav>
                <a routerLink="/" routerLinkActive="active">Home</a>
                <a routerLink="/values" routerLinkActive="active">Values</a>
                <a (click)="logout()">Logout</a>
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
    constructor(private auth: Adal4Service, private http: Adal4HTTPService) {
        this.auth.init(config);
    }

    ngOnInit() {

        // Handle callback if this is a redirect from Azure
        this.auth.handleWindowCallback();

        // Check if the user is authenticated. If not, call the login() method
        if (!this.auth.userInfo.authenticated) {
            this.auth.login();
        }
    }

    public logout() {
        this.auth.logOut();
    }
}
