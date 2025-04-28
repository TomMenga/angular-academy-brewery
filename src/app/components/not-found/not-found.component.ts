import {Component, inject} from '@angular/core';
import {BeersApiService} from '../../service/beers-api.service';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  public beersApiService = inject(BeersApiService);
  
}
