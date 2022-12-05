import { DataSource } from 'typeorm';
//npm run migrations:generate ./src/database/migrations/init
export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '123456',
  database: 'colegioComunal',
  //url: process.env.DATABASE_URL,
  logging: true,
  synchronize: false,
  name: 'default',
  entities: ['src/**/**.entity.ts'],
  migrations: ['src/databases/migrations/**/*{.ts,.js}'],
  /* ssl: {
    rejectUnauthorized: false,
  }, */
});
