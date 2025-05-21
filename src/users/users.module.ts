import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaClientModule } from 'src/prisma_client/prisma_client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
