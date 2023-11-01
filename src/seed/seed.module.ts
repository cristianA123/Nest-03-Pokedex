import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  imports: [
    PokemonModule
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
