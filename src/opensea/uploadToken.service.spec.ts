import { Test, TestingModule } from '@nestjs/testing';
import { UploadTokenService } from './uploadToken.service';

describe('PokemonService', () => {
  let service: UploadTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadTokenService],
    }).compile();

    service = module.get<UploadTokenService>(UploadTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
