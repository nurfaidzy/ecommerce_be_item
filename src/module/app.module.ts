import { Module } from '@nestjs/common';
import { AppController } from './../controller/app.controller';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
import DBConfig from './db.config';

@Module({
  imports: [ConfigModule.forRoot(), DBConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
