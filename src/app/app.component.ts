import { Component } from '@angular/core';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, BeerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-academy-brewery';
}
