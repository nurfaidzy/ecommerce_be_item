import { Module } from '@nestjs/common';
import { AppController } from './../controller/app.controller';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
import { DBConfig } from '../db/db.config';
import { VaultModule } from './vault.module';
import { ItemsController } from './../controller/items.controller';
import { ItemService } from 'src/services/items.service';

@Module({
  imports: [ConfigModule.forRoot(), DBConfig, VaultModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemService],
})
export class AppModule {}
