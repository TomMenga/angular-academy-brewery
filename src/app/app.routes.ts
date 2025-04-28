import { Routes } from '@angular/router';
import {BeerListComponent} from './components/beer-list/beer-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AddBeerComponent} from './components/add-beer/add-beer.component';

export const routes: Routes = [
  { path: 'beers/:id/edit', component: AddBeerComponent },
  { path: 'beers/new', component: AddBeerComponent },
  { path: 'beers', component: BeerListComponent },
  { path: '', redirectTo: 'beers', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
