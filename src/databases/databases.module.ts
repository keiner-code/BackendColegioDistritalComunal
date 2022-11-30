import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'config';
import { ConfigType } from '@nestjs/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          url: configService.postgreUrl,
          synchronize: false,
          autoLoadEntities: true,
          /* ssl: {
            rejectUnauthorized: false,
          }, */
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabasesModule {}
