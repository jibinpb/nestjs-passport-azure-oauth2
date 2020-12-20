
var AzureOAuth2Strategy = require("passport-azure-oauth2");
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class MyAzureOAuth2Strategy extends PassportStrategy(AzureOAuth2Strategy,"azure-oauth2") {
    constructor() {
        super({
            clientID: "XXXXXX-XXXXX-XXXXX",
            callbackURL: "http://localhost:3000/",
            tenant: "XXXX-XXXX",
            prompt: 'login',
            state: false
        });
    }
}