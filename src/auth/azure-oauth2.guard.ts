import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AzureOAuth2AuthGuard extends AuthGuard('azure-oauth2') {}