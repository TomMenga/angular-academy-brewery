
export interface Beer {
  id: number;
  beerName: string;
  beerStyle: BeerStyle;
  upc: string;
  price: number;
  createdDate: Date;
  lastModifiedDate: Date;
}

export type BeerStyle = typeof BEER_STYLES[number];
export const BEER_STYLES = [
  'ALE',
  'GOSE',
  'IPA',
  'LAGER',
  'PALE_ALE',
  'PILSNER',
  'PORTER',
  'SAISON',
  'STOUT',
  'HEAT',
  'WHEAT',
] as const;
