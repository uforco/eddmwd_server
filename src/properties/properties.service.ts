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
    const {property, location, agent, image} = createPropertyDto;
    let result;

    if(image){
      result = await this.cloudinary.uploadImage(image.buffer);
    }

    try {
      const agentData = await this.prisma.user.create({
        data: agent
      });
      const newData = await this.prisma.property.create({
        data: {
          rooms: property.rooms,
          size: property.size,
          bathrooms: property.bathrooms,
          beds: property.beds,
          available_for: property.available_for,
          short_desc: property.short_desc,
          image_path: result ? result['secure_url'] : '',
          price: property.price,
          desc: property.desc,
          owner_id: agentData.id,
          location: {
            create: location,
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
