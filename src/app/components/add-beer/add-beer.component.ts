import {Component, inject, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Beer, BEER_STYLES} from '../../model/beer.model';
import {BeersApiService} from '../../service/beers-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-beer',
  imports: [ReactiveFormsModule],
  templateUrl: './add-beer.component.html',
  styleUrl: './add-beer.component.css'
})
export class AddBeerComponent {
  beerStyles = BEER_STYLES;

  beerForm = new FormGroup({
    beerName: new FormControl('', Validators.required),
    beerStyle: new FormControl('', Validators.required),
    upc: new FormControl(''),
    price: new FormControl(0, Validators.min(1)),
  });

  private _beerApiService = inject(BeersApiService);
  private _router = inject(Router);

  @Input() id?: string;

  ngOnInit(): void {
    // Read param from url
    console.log(this.id)

    // Initialize form
    this.beerForm.patchValue({
      beerName: 'test'
    })
  }

  onFormSubmit() {
    const beer: Beer = {
      ...this.beerForm.value as any,
      createdDate: new Date(),
      lastModifiedDate: new Date(),
    };

    this._beerApiService.addBeer(beer);
    this._router.navigate(['/']);
  }
}
