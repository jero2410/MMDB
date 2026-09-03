import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository],
  exports: [MoviesRepository],
})
export class MoviesModule {}
