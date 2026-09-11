import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //isso deixa o site como a primeira coisa que exibe quando ele abre o site sera o home
  { path: 'home', component: Home },
  {path: '**', component: PaginaNaoEncontrada}
];
