import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabasesModule } from './databases/databases.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from '../environments';
import { ColegioModule } from './colegio/colegio.module';
import { AuthModule } from './auth/auth.module';
import config from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    DatabasesModule,
    UsersModule,
    ColegioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
