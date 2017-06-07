import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ValuesComponent } from './values/values.component';

// services
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
        ValuesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
