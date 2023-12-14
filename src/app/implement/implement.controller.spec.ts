import { Test, TestingModule } from '@nestjs/testing';
import { ImplementController } from './implement.controller';
import { ImplementService } from './implement.service';
import { ImplementEntity } from './implement.entity';
import { ImplementDTO } from './dto/implement.dto';

describe('ImplementController', () => {
  let implementController: ImplementController;
  let implementService: ImplementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImplementController],
      providers: [
        {
          provide: ImplementService,
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    implementController = module.get<ImplementController>(ImplementController);
    implementService = module.get<ImplementService>(ImplementService);
  });

  it('should be defined', () => {
    expect(implementController).toBeDefined();
    expect(implementService).toBeDefined();
  });

  describe('save', () => {
    it('should be defined', () => {
      // Arrange
      const body: ImplementDTO = {
        name: 'Implemento 1',
      };

      const implementEntityMock = { ...body } as ImplementEntity;
      jest.spyOn(implementService, 'save').mockResolvedValueOnce(implementEntityMock);

      // Act
      const result = implementController.save(body);
      // Assert
      expect(result).toBeDefined();
      expect(implementService.save).toHaveBeenCalledTimes(1);
    });
  });
});
