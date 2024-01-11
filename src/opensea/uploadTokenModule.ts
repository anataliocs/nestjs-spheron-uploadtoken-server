import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UploadTokenController } from './uploadTokenController';
import { UploadTokenService } from './uploadToken.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [HttpModule],
  controllers: [UploadTokenController],
  providers: [UploadTokenService],
})
export class UploadTokenModule {}
