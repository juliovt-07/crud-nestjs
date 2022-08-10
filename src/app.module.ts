import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
require('dotenv/config');

@Module({
  imports: [MongooseModule.forRoot(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.gdwgazf.mongodb.net/test`
  ), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
