import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { EvandrefComponent } from './components/evandref/evandref.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { AddComponent } from './components/lista-compras/add/add.component';
import { BuyComponent } from './components/lista-compras/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { FColorComponent } from './components/p-color/f-color/f-color.component';
import { AnimeComponent } from './components/anime/anime.component';
import { HttpClientModule } from '@angular/common/http';
import { PiadaComponent } from './components/piada/piada.component';
import { DetailsComponent } from './components/anime/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CalculatorComponent,
    EvandrefComponent,
    FourOFourComponent,
    ListaComprasComponent,
    AddComponent,
    BuyComponent,
    PColorComponent,
    FColorComponent,
    AnimeComponent,
    PiadaComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
