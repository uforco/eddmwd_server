import { Module } from '@nestjs/common';
import { PrismaClientModule } from './prisma_client/prisma_client.module';
import { PropertiesModule } from './properties/properties.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ContactusModule } from './contactus/contactus.module';

@Module({
  imports: [PrismaClientModule, PropertiesModule, CloudinaryModule, ContactusModule],
  controllers: [],
  providers: [],
  exports: [PrismaClientModule]
})
export class AppModule {}
