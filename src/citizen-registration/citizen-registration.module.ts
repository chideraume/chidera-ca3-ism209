import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CitizensBiodataModule } from './citizens-biodata/citizens-biodata.module';

@Module({
  imports: [UsersModule, CitizensBiodataModule ]
})
export class CitizenRegistrationModule {}
