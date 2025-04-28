import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerCardComponent } from '../beer-card/beer-card.component';
import {BeersApiService} from '../../service/beers-api.service';
import {Beer} from '../../model/beer.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-beer-list',
  imports: [ CommonModule, BeerCardComponent, RouterLink ],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css',
})
export class BeerListComponent {
  public beers: Beer[];

  constructor(private beersApiService: BeersApiService) {
    this.beers = beersApiService.getBeers();

    this.beersApiService.getBeersFromServer().subscribe(data => { console.log(data); });
    console.log('test');
  }

  public onEditClick() {
    console.log('onEditClick');
  }

  public deleteBeer(beerId: number) {
    const index = this.beers.findIndex((b)=> beerId === b.id);
    this.beers.splice(index, 1);
  }
}
