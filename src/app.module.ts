import { Module } from '@nestjs/common';
import { PrismaClientModule } from './prisma_client/prisma_client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
