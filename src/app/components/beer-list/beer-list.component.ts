import { Component } from '@angular/core';
import { BeersData } from '../../model/beer-data';

@Component({
  selector: 'app-beer-list',
  imports: [],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css',
})
export class BeerListComponent {
  public beers = BeersData;
}
