import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MyAzureOAuth2Strategy } from './auth/my-azure-oauth2.strategy';

var AzureOAuth2Strategy = require("passport-azure-oauth2");

@Module({
  imports: [
    PassportModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService,
    MyAzureOAuth2Strategy
  ],
})
export class AppModule { }
