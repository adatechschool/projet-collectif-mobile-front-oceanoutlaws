import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spot } from './data.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Spot)
    private dataRepository: Repository<Spot>,
  ) {}

  findAll(): Promise<Spot[]> {
    return this.dataRepository.find();
  }

  async findOne(id: number): Promise<Spot | null> {
    const spot = await this.dataRepository.findOne({ where: { id } });
    if (!spot) {
      throw new NotFoundException(`Spot with ID ${id} not found`);
    }
    return spot;
  }

  async remove(id: number): Promise<void> {
    const result = await this.dataRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Spot with ID ${id} not found`);
    }
  }

  // Ajoutez d'autres méthodes personnalisées ici si nécessaire
}
