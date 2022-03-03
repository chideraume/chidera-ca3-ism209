import { Module } from '@nestjs/common';
import { LinkedIdentitiesService } from './linked-identities.service';
import { LinkedIdentitiesController } from './linked-identities.controller';
import { User } from '../users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [LinkedIdentitiesController],
  providers: [LinkedIdentitiesService]
})
export class LinkedIdentitiesModule {}
