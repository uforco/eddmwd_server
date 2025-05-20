import { Module } from '@nestjs/common';
import { PrismaClientModule } from './prisma_client/prisma_client.module';
import { PropertyController } from './property/property.controller';
import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [PrismaClientModule, PropertiesModule],
  controllers: [PropertyController],
  providers: [],
})
export class AppModule {}
