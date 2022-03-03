import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 import { User } from '../users/entities/user.entity';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentitiesService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private LinkedIdentitiesRespository: Repository<LinkedIdentity>
  ) { }
  async create(_createLinkedIdentityDto: CreateLinkedIdentityDto) {
    return this.LinkedIdentitiesRespository.save(new LinkedIdentity);
  }

  async findAll() {
    return await this.LinkedIdentitiesRespository.find();
  }

  async findOne(id: number) {
    return await this.LinkedIdentitiesRespository.findOne();
  }

  async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return await this.LinkedIdentitiesRespository.update(id, new UpdateLinkedIdentityDto);
  }

  async remove(id: number) {
    return await this.LinkedIdentitiesRespository.delete(id);
  }
}