import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PrismaClientService } from 'src/prisma_client/prisma_client.service';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService, PrismaClientService],
})
export class PropertiesModule {}
