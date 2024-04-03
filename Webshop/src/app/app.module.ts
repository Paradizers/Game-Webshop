import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { GamesComponent } from './components/games.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'games', component: GamesComponent } 
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GamesComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes) 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
