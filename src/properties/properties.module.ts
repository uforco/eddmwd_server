import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
// import { PrismaClientService } from 'src/prisma_client/prisma_client.service';
import { PrismaClientModule } from 'src/prisma_client/prisma_client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [PropertiesController],
  providers: [PropertiesService],
  
})
export class PropertiesModule {}
