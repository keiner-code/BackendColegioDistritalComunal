import { registerAs } from '@nestjs/config';
export default registerAs('config', () => {
  return {
    postgreUrl: process.env.DATABASE_URL,
    postgres: {
      dbName: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
    },
    jwtSecret: process.env.JWT_SECRET,
  };
});
