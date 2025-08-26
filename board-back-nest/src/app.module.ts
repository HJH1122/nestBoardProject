import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMMysqlConfig } from 'config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMMysqlConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
