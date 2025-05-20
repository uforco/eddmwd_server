export class CreatePropertyDto {
  rooms: number   
  size: number 
  bathrooms: number
  beds: number
  available_for: string
  short_desc: string
  desc: string
  location_id: string
  owner_id: number
}

class Location{
    address: string
    city: string
    postal_code: string
    state: string
    country: string
}

class Owner{
    email: string
    name: string
    phone: string
}