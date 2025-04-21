import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Category } from '../entity/category.entity';
import { CategorySlug } from '../entity/categorySlug.entity';
import { Product } from '../entity/product.entity';
import { config } from 'dotenv';

config();

// Validate required env vars
const requiredEnvVars = [
  'DB_HOST',
  'DB_PORT',
  'DB_USER',
  'DB_PASSWORD',
  'DB_NAME',
];
requiredEnvVars.forEach((v) => {
  if (!process.env[v]) throw new Error(`Missing environment variable: ${v}`);
});

// Shared configuration
const getDbConfig = (config: {
  get: (key: string) => string | undefined;
}): DataSourceOptions => ({
  type: 'postgres',
  host: config.get('DB_HOST'),
  port: Number(config.get('DB_PORT')),
  username: config.get('DB_USER'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME'),
  entities: [Category, CategorySlug, Product],
  synchronize: false, // Always false in production
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
});

// For NestJS DI
export const DBConfig = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => getDbConfig(configService),
});

// For TypeORM CLI
export const AppDataSource = new DataSource({
  ...getDbConfig({ get: (key: string) => process.env[key] }),
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
