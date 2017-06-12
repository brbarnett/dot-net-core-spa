import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

// authentication - taken from https://github.com/benbaran/adal-angular4-example
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ValuesComponent } from './values/values.component';

// services
import { AuthSecretService } from './services/auth-secret.service';
import { AuthHttpService } from './services/auth-http.service';
import { UrlService } from './services/url.service';
import { ValuesService } from './services/values.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [] },
    { path: 'values', component: ValuesComponent, canActivate: [] }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ValuesComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule
    ],
    providers: [
        AuthHttpService,
        AuthSecretService,
        UrlService,
        ValuesService,
        Adal4Service,
        {
            provide: Adal4HTTPService,
            useFactory: Adal4HTTPService.factory,
            deps: [Http, Adal4Service]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
