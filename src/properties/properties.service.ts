import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaClientService } from 'src/prisma_client/prisma_client.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaClientService) {}

  async create(createPropertyDto: CreatePropertyDto) {
    // console.log("create createPropertyDto", createPropertyDto)
    try {
      const newData = await this.prisma.property.create({
        data: {
          rooms: createPropertyDto.rooms,
          size: createPropertyDto.size,
          bathrooms: createPropertyDto.bathrooms,
          beds: createPropertyDto.beds,
          available_for: createPropertyDto.available_for,
          short_desc: createPropertyDto.short_desc,
          image_path: createPropertyDto.image_path,
          price: createPropertyDto.price,
          desc: createPropertyDto.desc,
          owner_id: createPropertyDto.owner_id,
          location: {
            create: createPropertyDto.location,
          },
        },
        select: {
          rooms: true,
          size: true,
          bathrooms: true,
          beds: true,
          available_for: true,
          short_desc: true,
          image_path: true,
          desc: true,
          owner: true,
          location: true,
        },
      });
      return {
        message: 'Property created successfully',
        status: 'success',
        data: newData,
      };
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.property.findMany({
        select: {
          id: true,
          rooms: true,
          size: true,
          bathrooms: true,
          price: true,
          beds: true,
          available_for: true,
          short_desc: true,
          image_path: true,
          desc: true,
          owner: true,
          location: {
            select: {
              address: true,
              city: true,
              state: true,
              country: true,
              postal_code: true,
            },
          },
        },
      });
      if (data.length < 1) {
        return {
          message: 'Data Not Found',
          data: [],
        };
      }
      return {
        message: 'successful',
        data,
      };
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.prisma.property.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          rooms: true,
          size: true,
          bathrooms: true,
          price: true,
          beds: true,
          available_for: true,
          short_desc: true,
          image_path: true,
          desc: true,
          owner: true,
          location: {
            select: {
              address: true,
              city: true,
              state: true,
              country: true,
              postal_code: true,
            },
          },
        },
      });

      if (!data) {
        return {
          message: 'Data Not Found',
          data: {},
        };
      }

      return {
        message: 'successful',
        data,
      };
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findquery(query: any) {
    console.log(query);
    return 'findquery-shar';
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
