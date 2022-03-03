import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenRegistrationModule } from './citizen-registration/citizen-registration.module';
import { CitizensBiodataModule } from './citizens-biodata/citizens-biodata.module';

@Module({
  imports: [TypeOrmModule.forRoot(),
    CitizenRegistrationModule,
    CitizensBiodataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
