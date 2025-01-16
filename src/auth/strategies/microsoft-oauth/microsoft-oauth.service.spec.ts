import { Test, TestingModule } from '@nestjs/testing';
import { MicrosoftOauthService } from './microsoft-oauth.service';

describe('MicrosoftOauthService', () => {
  let service: MicrosoftOauthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicrosoftOauthService],
    }).compile();

    service = module.get<MicrosoftOauthService>(MicrosoftOauthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
