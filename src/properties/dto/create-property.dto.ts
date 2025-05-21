export enum AvailableFor {
  Rent = 'Rent',
  Sell = 'Sell',
}

export class CreatePropertyDto {
  rooms: number;
  size: number;
  bathrooms: number;
  beds: number;
  available_for: AvailableFor;
  short_desc: string;
  desc: string;
  location_id: string;
  owner_id: number;
}
