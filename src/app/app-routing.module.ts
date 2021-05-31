import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { EvandrefComponent } from './components/evandref/evandref.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-compras/add/add.component';
import { BuyComponent } from './components/lista-compras/buy/buy.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { FColorComponent } from './components/p-color/f-color/f-color.component';
import { AnimeComponent } from './components/anime/anime.component';
import { PiadaComponent } from './components/piada/piada.component';
import { DetailsComponent } from './components/anime/details/details.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"calculator", component: CalculatorComponent},
  {path:"EvAndRef", component: EvandrefComponent},
  {path:"Shop", component: ListaComprasComponent,
  children: [
    {path:"Add", component: AddComponent},
    {path:"Buy", component: BuyComponent},
  ]},
  {path:"p-color", component: PColorComponent,
  children: [
    {path:":color", component: FColorComponent},
  ]},
  {path:"piada", component: PiadaComponent},
  {path:"anime", component: AnimeComponent,
  children: [
    {path:":id", component: DetailsComponent},
  ]},
  /*
  {path:"notFound", component: FourOFourComponent},
  {path:"**", redirectTo: "notFound"},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
