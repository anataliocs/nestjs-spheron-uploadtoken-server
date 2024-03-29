import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import {AxiosHeaders, RawAxiosRequestHeaders} from "axios";
import {AxiosRequestConfig} from "axios/index";
import * as process from "process";
import {UploadRes} from "./dto/UploadRes";
import { SpheronClient, ProtocolEnum } from "@spheron/storage";

@Injectable()
export class UploadTokenService {
  constructor(
    private readonly httpService: HttpService
  ) {}

  async getUploadToken(bucketName: string): Promise<UploadRes> {

      const protocol = ProtocolEnum.IPFS;

      const client = new SpheronClient({
          token: process.env.SPHERON_ACCESS_TOKEN,
      });

    return await client.createSingleUploadToken({
        name: bucketName,
        protocol,
    });
  }
}
