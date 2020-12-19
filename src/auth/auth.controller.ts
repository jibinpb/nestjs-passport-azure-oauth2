import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { AzureOAuth2AuthGuard } from './azure-oauth2.guard';
import { MyAzureOAuth2Strategy } from './my-azure-oauth2.strategy';
var passport = require("passport");

@Controller('auth')
export class AuthController {
    @UseGuards(AzureOAuth2AuthGuard)
    @Get()
    Get(){
        passport.authenticate("provider", { successRedirect: "/" })
    }
}
