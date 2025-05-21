import { Module } from '@nestjs/common';
import { PrismaClientModule } from './prisma_client/prisma_client.module';
import { PropertiesModule } from './properties/properties.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [PrismaClientModule, PropertiesModule, CloudinaryModule],
  controllers: [],
  providers: [],
  exports: [PrismaClientModule]
})
export class AppModule {}
