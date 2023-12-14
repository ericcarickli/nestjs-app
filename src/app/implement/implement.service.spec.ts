import { Test, TestingModule } from '@nestjs/testing';
import { ImplementService } from './implement.service';
import { Repository } from 'typeorm';
import { ImplementEntity } from './implement.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ImplementDTO } from './dto/implement.dto';

describe('ImplementService', () => {
  let implementService: ImplementService;
  let implementRepository: Repository<ImplementEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImplementService,
        {
          provide: getRepositoryToken(ImplementEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    implementService = module.get<ImplementService>(ImplementService);
    implementRepository = module.get<Repository<ImplementEntity>>(getRepositoryToken(ImplementEntity));
  });

  it('should be defined', () => {
    expect(implementService).toBeDefined();
    expect(implementRepository).toBeDefined();
  });

  describe('save', () => {
    it('should be defined', () => {
      // Arrange
      const data: ImplementDTO = {
        name: 'Implemento 1',
      };

      const implementEntityMock = { ...data } as ImplementEntity;
      jest.spyOn(implementRepository, 'create').mockReturnValueOnce(implementEntityMock);
      jest.spyOn(implementRepository, 'save').mockResolvedValueOnce(implementEntityMock);

      // Act
      const result = implementService.save(data);

      // Assert
      expect(result).toBeDefined();
      expect(implementRepository.create).toHaveBeenCalledTimes(1);
      expect(implementRepository.save).toHaveBeenCalledTimes(1);
    });
  });
});
