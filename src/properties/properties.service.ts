import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaClientService } from 'src/prisma_client/prisma_client.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma:PrismaClientService){}

  async create(createPropertyDto: CreatePropertyDto) {

    console.log("createPropertyDto", createPropertyDto)
    
    const newData = await this.prisma.property.create({
      data: {
        rooms: createPropertyDto.rooms,
        size: createPropertyDto.size,
        bathrooms: createPropertyDto.bathrooms,
        beds: createPropertyDto.beds,
        available_for: createPropertyDto.available_for,
        short_desc: createPropertyDto.short_desc,
        image_path: createPropertyDto.image_path,
        desc: createPropertyDto.desc,
        owner_id: createPropertyDto.owner_id,
        location: {
          create: createPropertyDto.location
        }      
      }
    });
    return {
      message: "Property created successfully",
      status: "success",
      data: newData
    }
  }

  findAll() {
    return `This action returns all properties`;
  }

  async findquery(query: any){
    console.log(query)
    return 'findquery-shar';
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
