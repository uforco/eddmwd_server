import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PrismaClientModule } from 'src/prisma_client/prisma_client.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService],
  imports: [PrismaClientModule, CloudinaryModule]
})
export class PropertiesModule {}
