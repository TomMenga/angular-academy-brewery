import {inject, Injectable} from '@angular/core';
import {BeersData} from '../model/beer-data';
import { Beer } from '../model/beer.model';
import {HttpClient} from '@angular/common/http';

let BeerId = 50;

@Injectable({
  providedIn: 'root'
})
export class BeersApiService {
  private _beers = BeersData;

  private _httpClient: HttpClient = inject(HttpClient);

  public getBeers(): Beer[] {
    return this._beers;
  }

  public addBeer(beer: Beer) {
    beer.id = BeerId++;
    this._beers.push(beer);
  }

  public getBeersFromServer() {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
