import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export enum AvailableFor {
  Rent = 'Rent',
  Sell = 'Sell',
}

export class LocationDto {
  @ApiProperty({ example: '123 Main St' })
  address: string;

  @ApiProperty({ example: 'New York' })
  city: string;

  @ApiProperty({ example: '10001' })
  postal_code: string;

  @ApiProperty({ example: 'NY' })
  state: string;

  @ApiProperty({ example: 'USA' })
  country: string;
}



export class PropertyDto {
  @ApiProperty({ example: 3 })
  rooms: number;

  @ApiProperty({ example: 1200.5 })
  size: number;

  @ApiProperty({ example: 2.5 })
  bathrooms: number;

  @ApiProperty({ example: 2 })
  beds: number;

  @ApiProperty({ example: 250000 })
  price: number;

  @ApiProperty({ enum: AvailableFor, example: AvailableFor.Sell })
  available_for: AvailableFor;

  @ApiProperty({ example: 'Cozy family home in the suburbs' })
  short_desc: string;

  // @ApiProperty({ example: '/uploads/house.jpg' })
  // image_path: string;

  @ApiProperty({ example: 'A well-lit house with 2 floors, a garden, and garage.' })
  desc: string;

  @ApiProperty({ type: LocationDto })
  location: LocationDto;

  @ApiProperty({ example: 1 })
  owner_id: number;
}

// export class OwnerDto {
//   @ApiProperty({ example: 'john@example.com' })
//   email: string;

//   @ApiProperty({ example: 'John Doe' })
//   name: string;

//   @ApiProperty({ example: '+1-123-456-7890' })
//   phone: string;
// }

export class CreatePropertyDto {
  @ApiProperty({ type: PropertyDto })
  @Type(() => PropertyDto)
  property: PropertyDto;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: Express.Multer.File;

  // @ApiProperty({ type: LocationDto })
  // @Type(() => LocationDto)
  // location: LocationDto;

  // @ApiProperty({ type: OwnerDto })
  // @Type(() => OwnerDto)
  // agent: OwnerDto;
}










