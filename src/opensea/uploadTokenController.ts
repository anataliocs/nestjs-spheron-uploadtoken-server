import { Controller, Get, Param } from '@nestjs/common';
import { UploadTokenService } from './uploadToken.service';
import {UploadToken} from "./dto/UploadToken";

@Controller('uploadToken')
export class UploadTokenController {
  constructor(private readonly service: UploadTokenService) {}

  @Get('/:bucketName')
  async getNft(@Param('bucketName') bucketName: string): Promise<string> {
    return await this.service.getUploadToken(bucketName);
  }
}
