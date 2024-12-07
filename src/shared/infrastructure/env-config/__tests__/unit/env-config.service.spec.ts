import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { ConfigModule } from '@nestjs/config';

describe('EnvConfigService unit test', () => {
  let sut: EnvConfigService;

  beforeEach(async () => {
    process.env.PORT = '3000'; // Defina a variável de ambiente antes de inicializar o módulo

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile();

    sut = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should return the variable PORT', () => {
    expect(sut.getAppPort()).toBe(3000);
  });

  it('should return the variable NODE_ENV', () => {
    expect(sut.getNodeEnv()).toBe('test');
  });
});
