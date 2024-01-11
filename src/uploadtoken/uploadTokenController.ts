import { Controller, Get, Param } from '@nestjs/common';
import { UploadTokenService } from './uploadToken.service';
import {UploadRes} from "./dto/UploadRes";

@Controller('uploadToken')
export class UploadTokenController {
  constructor(private readonly service: UploadTokenService) {}

  @Get('/:bucketName')
  async getNft(@Param('bucketName') bucketName: string): Promise<UploadRes> {
    return await this.service.getUploadToken(bucketName);
  }
}
