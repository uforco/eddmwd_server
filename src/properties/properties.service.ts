import { Injectable } from '@nestjs/common';
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

    const agentData = await this.prisma.user.create({
      data: JSON.parse(agent.toString())
    });

    const locationData = await this.prisma.location.create({
      data: JSON.parse(location.toString())
    });

    let p = JSON.parse(property.toString());

    const newProperty = {...p, location_id: locationData.id, owner_id: agentData.id, image_path: result ? result['secure_url'] : ''};

    const propertyData = await this.prisma.property.create({
      data: newProperty
    });
    return propertyData;
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
