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
  image_path: string;
  desc: string;
  location: LocationDto;
  owner_id: number;
}

// Optional: Define Location class as a DTO for nested input
export class LocationDto {
  address: string;
  city: string;
  postal_code: string;
  state: string;
  country: string;
}

// Optional: Define Owner class as a DTO for nested input
export class OwnerDto {
  email: string;
  name: string;
  phone: string;
}
