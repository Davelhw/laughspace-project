import { Test, TestingModule } from '@nestjs/testing';
import { LaughspaceAppController } from './laughspace-app.controller';
import { LaughspaceAppService } from './laughspace-app.service';

describe('LaughspaceAppController', () => {
  let laughspaceAppController: LaughspaceAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LaughspaceAppController],
      providers: [LaughspaceAppService],
    }).compile();

    laughspaceAppController = app.get<LaughspaceAppController>(LaughspaceAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(laughspaceAppController.getHello()).toBe('Hello World!');
    });
  });
});
