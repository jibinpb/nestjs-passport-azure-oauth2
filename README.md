# NestJS authentication using `passport-azure-oauth2`

npm install --save @nestjs/passport passport passport-azure-oauth2


## Create New Nest JS
```
nest new nestjs-passport-azure-oauth2 
```

## Instalation 

npm install --save @nestjs/passport passport passport-azure-oauth2

## Create 

nest g module auth
nest g service auth
nest g controller auth

nest g guard auth/azure-oauth2 -d
nest g class auth/my-azure-oauth2.strategy -d