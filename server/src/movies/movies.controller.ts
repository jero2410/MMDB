import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieQueryDto } from './dto/MoviePagination.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAllMovies(@Query() queryDto: MovieQueryDto) {
    return this.moviesService.findAllMovies(queryDto);
  }
}
