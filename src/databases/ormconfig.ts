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
  //url: 'postgres://colegiocomunal_user:19bLPGNYjhGeDqwnwJbQ1RO0MPhmy9pb@dpg-cl6ld12uuipc73cor6ag-a.oregon-postgres.render.com/colegiocomunal',
  logging: true,
  synchronize: false,
  name: 'default',
  entities: ['src/**/**.entity.ts'],
  migrations: ['src/databases/migrations/**/*{.ts,.js}'],
  /* ssl: {
    rejectUnauthorized: false,
  }, */
});
