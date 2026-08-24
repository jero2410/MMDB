import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieListDto } from './dto/MovieList.dto';
import { plainToInstance } from 'class-transformer';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  async getAllMovies(@Query('Search') query: string) {
    const movies = await this.moviesService.findAllMovies(query);

    return plainToInstance(MovieListDto, movies, {
      excludeExtraneousValues: true,
    });
  }
}
