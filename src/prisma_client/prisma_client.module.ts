import { Module } from '@nestjs/common';
import { PrismaClientService } from './prisma_client.service';

@Module({
  controllers: [],
  providers: [PrismaClientService],
  exports: [PrismaClientService],
})
export class PrismaClientModule {}
