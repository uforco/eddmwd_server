import { Module } from '@nestjs/common';
import { PrismaClientModule } from './prisma_client/prisma_client.module';
import { PropertiesModule } from './properties/properties.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaClientModule, PropertiesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
