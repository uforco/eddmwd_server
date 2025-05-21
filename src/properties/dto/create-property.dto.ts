export enum AvailableFor {
  Rent = 'Rent',
  Sell = 'Sell',
}

export class CreatePropertyDto {
  property: PropertyDto;
  image: Express.Multer.File;
  location: LocationDto;
  agent: OwnerDto;
}

export class PropertyDto {
  rooms: number;
  size: number;
  bathrooms: number;
  beds: number;
  price: number;
  available_for: AvailableFor;
  short_desc: string;
  image_path: string;
  desc: string;
  location: LocationDto;
  owner_id: number;
}

export class LocationDto {
  address: string;
  city: string;
  postal_code: string;
  state: string;
  country: string;
}

export class OwnerDto {
  email: string;
  name: string;
  phone: string;
}

