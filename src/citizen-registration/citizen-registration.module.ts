import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LinkedIdentitiesModule } from './linked-identities/linked-identities.module';
 

@Module({
  imports: [UsersModule, LinkedIdentitiesModule,  ]
})
export class CitizenRegistrationModule {}
