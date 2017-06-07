import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <header class="container">
            <nav>
                <a routerLink="/" routerLinkActive="active">Home</a>
                <a routerLink="/values" routerLinkActive="active">Values</a>
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
}
