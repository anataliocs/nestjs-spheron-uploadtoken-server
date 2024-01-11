import { Test, TestingModule } from '@nestjs/testing';
import { UploadTokenController } from './uploadTokenController';

describe('PokemonController', () => {
  let controller: UploadTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadTokenController],
    }).compile();

    controller = module.get<UploadTokenController>(UploadTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
