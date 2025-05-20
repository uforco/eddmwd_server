import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaClientService } from 'src/prisma_client/prisma_client.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma:PrismaClientService){}

  async create(createPropertyDto: CreatePropertyDto) {
    const newData = await this.prisma.property.create({
      data: createPropertyDto
    });
    return 
  }

  findAll() {
    return `This action returns all properties`;
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
