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

// Optional: Define Location class as a DTO for nested input
export class LocationDto {
  address: string;
  city: string;
  postal_code: string;
  state: string;
  country: string;
}

// Optional: Define Owner class as a DTO for nested input

