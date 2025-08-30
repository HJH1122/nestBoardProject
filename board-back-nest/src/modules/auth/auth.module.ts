import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import JwtAuthStrategey from './jwt-auth.strategey';
import { PassportModule } from '@nestjs/passport';
import { passportJwtConfig } from 'config';

@Module({
  imports: [PassportModule.register(passportJwtConfig)],
  controllers: [AuthController],
  providers: [JwtAuthStrategey, AuthService],
  exports: [JwtAuthStrategey],
})
export class AuthModule {}
