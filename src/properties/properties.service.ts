import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaClientService } from 'src/prisma_client/prisma_client.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class PropertiesService {

  private prisma: PrismaClientService;
  private cloudinary: CloudinaryService;

  constructor(prisma:PrismaClientService, cloudinary: CloudinaryService){
    this.prisma = prisma;
    this.cloudinary = cloudinary;
  }

  async create(createPropertyDto: CreatePropertyDto) {
    const {property, image} = createPropertyDto;
    let result: any;

    if(image){
      result = await this.cloudinary.uploadImage(image.buffer);
    }

    try {
      const propertyData = JSON.parse(property.toString());
      const newData = await this.prisma.property.create({
        data: {
          rooms: propertyData.rooms,
          size: propertyData.size,
          bathrooms: propertyData.bathrooms,
          beds: propertyData.beds,
          available_for: propertyData.available_for,
          short_desc: propertyData.short_desc,
          image_path: result ? result['secure_url'] : '',
          price: propertyData.price,
          desc: propertyData.desc,
          owner_id: propertyData.owner_id,
          location: {
            create: {
              address: propertyData.location.address,
              city: propertyData.location.city,
              state: propertyData.location.state,
              country: propertyData.location.country,
              postal_code: propertyData.location.postal_code,
            }
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
    } catch (e){
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
