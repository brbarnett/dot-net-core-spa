import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ValuesComponent } from './values/values.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
